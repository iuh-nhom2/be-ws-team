import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GqlConfigService } from './graphql.options'
@Module({
  imports: [
    GraphQLModule.forRootAsync({
        useClass: GqlConfigService
    }),
]
})
export class GraphqlModule {}
