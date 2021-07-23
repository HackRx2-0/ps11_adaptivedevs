import { Role } from '@prisma/client';
import { ApolloError } from 'apollo-server-express';
import { GraphQLResolveInfo } from 'graphql';
import { OutputScalarConfig } from 'nexus/dist/core';
import { Context } from 'src/graphql/context';
import _ from 'lodash';
import { NotAuthenticatedError } from 'src/errors/NotAuthenticated.error';

//TODO: implement authentication with Redis cache
export const authenticated =
  (next: OutputScalarConfig<string, string>['resolve']) =>
  async (root: any, args: any, ctx: Context, info: GraphQLResolveInfo) => {
    if (!ctx.req.session?.token) {
      throw new NotAuthenticatedError();
    } else {
      const uuid = ctx.req.session.uuid;
      const token = ctx.req.session.token;

      const session = await ctx.prisma.session.findUnique({
        where: {
          token,
        },
        include: {
          User: true,
        },
      });
      const user = session?.User;
      if (!session || uuid !== user?.uuid) {
        throw new NotAuthenticatedError();
      } else {
        if (next && user) {
          ctx.user = user;
          return next(root, args, ctx, info);
        }
      }
      return;
      // const user = await ctx.prisma.user.findUnique({
      //   where: {
      //     uuid,
      //   },
      //   include: {
      //     sessions: true,
      //   },
      // });

      // if (!user?.sessions) {
      //   throw new NotAuthenticatedError();
      // } else {
      //   for (const session of user.sessions) {
      //     if (session.token == token) {
      //       if (next) {
      //         ctx.user = user;
      //         return next(root, args, ctx, info);
      //       }
      //     }
      //   }
      // }
    }
  };

export const authorized =
  (next: OutputScalarConfig<string, string>['resolve'], role: Role) =>
  async (root: any, args: any, ctx: Context, info: GraphQLResolveInfo) => {
    if (next) {
      if (ctx.user && ctx.user.role == role) {
        return next(root, args, ctx, info);
      } else {
        throw new NotAuthenticatedError();
      }
    }
  };
