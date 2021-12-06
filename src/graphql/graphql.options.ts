import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { join } from 'path'

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    return {
      context: ({ req, res }) => ({ req, res }),

      installSubscriptionHandlers: true,
      resolverValidationOptions: {
        requireResolversForResolveType: 'ignore',
      },
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      autoSchemaFile: true,
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
      uploads: {
        maxFileSize: 10000000, // 10 MB
        maxFiles: 5,
      },
      debug: true,
      introspection: true,
      playground: true,
      cors: false
      // typePaths: ['./**/*.graphql'],
    }
  }
}