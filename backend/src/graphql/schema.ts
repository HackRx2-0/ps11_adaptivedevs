import { makeSchema, nullable, objectType, queryType, stringArg } from 'nexus';
import path from 'path';
import { authenticated, authorized } from 'src/middlewares/auth.middleware';
import {
  DocotorObjectType,
  FindDoctorQueryType,
  // CreateNewDoctorMutation,
} from './resolvers/doctor';
import { CreateUserMutation, UserObject } from './resolvers/user';

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
    UserObject,
    CreateUserMutation,
    DocotorObjectType,
    FindDoctorQueryType,
    // CreateNewDoctorMutation,
  ],
});

export default schema;
