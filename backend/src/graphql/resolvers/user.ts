import { UserInputError } from 'apollo-server-express';
import {
  objectType,
  enumType,
  mutationType,
  stringArg,
  nonNull,
  arg,
  inputObjectType,
  list,
} from 'nexus';
import {
  DocotorInputObjectType,
  DocotorObjectType,
  DoctorLanguagesSpoken,
  DoctorQualifications,
  DoctorSpecialities,
} from './doctor';
import { name, lorem } from 'faker';
import { User } from '@prisma/client';

export const Role = enumType({
  name: 'Role',
  members: ['patient', 'doctor', 'admin', 'superAdmin'],
});
export const Gener = enumType({
  name: 'Gender',
  members: ['male', 'female'],
});
export const UserObject = objectType({
  name: 'User',
  definition(t) {
    t.id('uuid');
    t.nullable.string('email');
    t.string('phone_number');
    t.string('name');
    Role;
    t.field('doctor', {
      type: DocotorObjectType,
    });
  },
});

export const CreateUserMutation = mutationType({
  definition(t) {
    t.field('signup', {
      type: 'User',
      args: {
        name: stringArg(),
        phone_number: nonNull(stringArg()),
        email: stringArg(),
        gender: Gener.asArg(),
      },
      resolve(root, args, ctx, info) {
        if (args.phone_number) {
          return ctx.prisma.user
            .create({
              data: {
                name: args.name,
                phone_number: args.phone_number,
                email: args.email,
                gender: args.gender,
                password: '12345',
              },
            })
        }
        throw new UserInputError('Phone number required');
      },
    });
  },
});
