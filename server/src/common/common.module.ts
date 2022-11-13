import { appConfig, throttleConfig } from '@app/common/configs'
import { CommonModuleOptions } from '@app/common/interfaces'
import { CorrelationIdMiddleware } from '@app/common/middlewares'
import { AppConfigService, HealthService, StrategyExplorerService } from '@app/common/services'
import { HttpModule } from '@nestjs/axios'
import { DynamicModule, Global, Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TerminusModule } from '@nestjs/terminus'
import { ThrottlerModule, ThrottlerModuleOptions } from '@nestjs/throttler'
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import path from 'path'
import { databaseConfig } from '@app/common/configs'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { User } from '@app/user/entities/user.entity'

@Global()
@Module({})
export class CommonModule {
  static register(options: CommonModuleOptions): DynamicModule {
    return {
      module: CommonModule,
      imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          playground: ['development', 'staging'].includes(process.env.NODE_ENV),
          debug: process.env.NODE_ENV === 'development',
          autoSchemaFile: path.join(process.cwd(), 'schema.gql'),
          buildSchemaOptions: {
            dateScalarMode: 'isoDate'
          }
        }),
        ConfigModule.forRoot({ ...options.configModule }),
        ConfigModule.forFeature(appConfig()),
        ConfigModule.forFeature(throttleConfig()),
        ConfigModule.forFeature(databaseConfig()),
        HttpModule,
        TerminusModule,
        I18nModule.forRoot({
          fallbackLanguage: 'en',
          loaderOptions: {
            path: path.join(__dirname, '/../i18n/lang'),
            watch: true
          },
          resolvers: [{ use: QueryResolver, options: ['lang', 'locale'] }, AcceptLanguageResolver]
        }),
        ThrottlerModule.forRootAsync({
          inject: [ConfigService],
          useFactory: async (configService: ConfigService): Promise<ThrottlerModuleOptions> => {
            return {
              ttl: configService.get<number>('throttle.ttl'),
              limit: configService.get<number>('throttle.limit')
            }
          }
        }),
        TypeOrmModule.forRootAsync({
          inject: [ConfigService],
          useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
            return {
              type: configService.get<'postgres'>('database.type'),
              host: configService.get<string>('database.host'),
              port: configService.get<number>('database.port'),
              username: configService.get<string>('database.username'),
              password: configService.get<string>('database.password'),
              database: configService.get<string>('database.name'),
              synchronize: configService.get<boolean>('database.synchronize'),
              dropSchema: configService.get<boolean>('database.dropSchema'),
              entities: [User],
              autoLoadEntities: true
            }
          }
        })
      ],
      providers: [StrategyExplorerService, CorrelationIdMiddleware, HealthService, AppConfigService],

      exports: [StrategyExplorerService, AppConfigService]
    }
  }
}
