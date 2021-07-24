import { Doctor } from '@prisma/client';
import { SingleFieldSubscriptionsRule } from 'graphql';
import { argsToArgsConfig } from 'graphql/type/definition';
import _ from 'lodash';
import {
  arg,
  booleanArg,
  enumType,
  inputObjectType,
  list,
  mutationField,
  mutationType,
  nonNull,
  objectType,
  queryType,
  stringArg,
} from 'nexus';
import { UserObject } from './user';

export const DoctorSpecialities = objectType({
  name: 'DoctorSpecialities',
  definition(t) {
    t.id('id');
    t.string('name');
  },
});

export const DoctorSpecialitiesInputObject = inputObjectType({
  name: 'DoctorSpecialitiesInputObject',
  definition(t) {
    t.nonNull.string('name');
  },
});

export const DoctorQualifications = objectType({
  name: 'DoctorQualifications',
  definition(t) {
    t.id('id');
    t.string('degree');
  },
});
export const DoctorQualificationsInputObject = inputObjectType({
  name: 'DoctorQualificationsInputObject',
  definition(t) {
    t.nonNull.string('degree');
  },
});
export const DoctorLanguagesSpoken = objectType({
  name: 'DoctorLanguagesSpoken',
  definition(t) {
    t.id('id');
    t.string('language');
  },
});

export const DoctorLanguagesSpokenInputObject = inputObjectType({
  name: 'DoctorLanguagesSpokenInputObject',
  definition(t) {
    t.nonNull.string('language');
  },
});

export const DocotorObjectType = objectType({
  name: 'Doctor',
  definition(t) {
    t.id('uuid');
    t.string('display_name');
    t.string('mrn');
    t.string('doctor_introduction');
    t.field('specialities', {
      type: list(DoctorSpecialities),
    });
    t.field('qualifications', {
      type: list(DoctorQualifications),
    });
    t.field('languages_spoken', {
      type: list(DoctorLanguagesSpoken),
    });
    t.string('last_online');
    t.boolean('is_online');
    t.boolean('ready_to_accept_patients');
    t.field('user', {
      type: UserObject,
    });
    t.string('photo');
  },
});
export const DocotorInputObjectType = inputObjectType({
  name: 'DocotorInputObjectType',
  definition(t) {
    t.string('display_name');
    t.string('mrn');
    t.string('doctor_introduction');
    t.field({
      name: 'DoctorSpecialitiesInputObject',
      type: list(DoctorSpecialitiesInputObject),
    });
    t.field({
      name: 'DoctorQualificationsInputObject',
      type: list(DoctorQualificationsInputObject),
    });
    t.field({
      name: 'DoctorLanguagesSpokenInputObject',
      type: list(DoctorLanguagesSpokenInputObject),
    });
    t.boolean('ready_to_accept_patients');
    t.string('photo');
  },
});

// export const CreateNewDoctorMutation = mutationType({
//   definition(t) {
//     t.field('createdoctor', {
//       type: 'Doctor',
//       args: {
//         userid: stringArg(),
//         doctor_details: DocotorInputObjectType.asArg(),
//       },
//       resolve(root, args, ctx, info) {
//         return ctx.prisma.doctor.create({
//           ...args.doctor_details,
//         });
//       },
//     });
//   },
// });

export const FindDoctorQueryType = queryType({
  definition(t) {
    t.list.field('doctors', {
      type: 'Doctor',
      args: {
        is_online: nonNull(booleanArg({ default: true })),
        specialities: list(nonNull(stringArg())),
      },
      async resolve(root, args, ctx, info) {
        if (!args.specialities) {
          return ctx.prisma.doctor.findMany({
            where: {
              is_online: args.is_online,
            },
            include: {
              languages_spoken: true,
              qualifications: true,
              specialities: true,
            },
          });
        }

        const doctorsWithSpecialities =
          await ctx.prisma.doctorSpecialities.findMany({
            where: {
              name: {
                in: args.specialities,
              },
            },
            select: {
              Doctor: {
                where: {
                  is_online: args.is_online,
                },
                include: {
                  languages_spoken: true,
                  qualifications: true,
                  specialities: true,
                },
              },
            },
          });
        const formattedData: Doctor[] = [];
        doctorsWithSpecialities.forEach((arrOfDoctor: { Doctor: Doctor[] }) =>
          arrOfDoctor.Doctor.forEach((doctor: Doctor) => {
            formattedData.push(doctor);
          })
        );
        return formattedData;
      },
    });
  },
});

// export const CreateDoctorMutation = mutationField((t)=> {})
