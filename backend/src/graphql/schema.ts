import { makeSchema, nullable, objectType, queryType, stringArg } from 'nexus';
import path from 'path';
import { authenticated, authorized } from 'src/middlewares/auth.middleware';

const schema = makeSchema({
  sourceTypes: {
    modules: [
      {
        module: '.prisma/client',
        alias: 'PrismaClient',
      },
    ],
  },
  contextType: {
    module: path.join(__dirname, 'context.ts'),
    export: 'Context',
  },
  outputs: {
    typegen: path.join(__dirname, 'generated/types.ts'),
    schema: path.join(__dirname, 'generated/schema.graphql'),
  },
  shouldExitAfterGenerateArtifacts: Boolean(
    process.env.NEXUS_SHOULD_EXIT_AFTER_REFLECTION
  ),
  types: [
    objectType({
      name: 'User',
      definition(t) {
        t.id('id');
        t.string('name');
        t.id('uuid');
      },
    }),
    queryType({
      definition(t) {
        t.list.field('users', {
          type: 'User',
          resolve: authenticated(
            authorized((root, args, ctx, info) => {
              return ctx.prisma.user.findMany();
            }, 'admin')
          ),
        });
      },
    }),
  ],
});

export default schema;
