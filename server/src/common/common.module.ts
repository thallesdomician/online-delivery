import { appConfig, throttleConfig } from '@app/common/configs'
import { CommonModuleOptions } from '@app/common/interfaces'
import { CorrelationIdMiddleware } from '@app/common/middlewares'
import { AppConfigService, HealthService, StrategyExplorerService } from '@app/common/services'
import { HttpModule } from '@nestjs/axios'
import { DynamicModule, Global, Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TerminusModule } from '@nestjs/terminus'
import { ThrottlerModule, ThrottlerModuleOptions } from '@nestjs/throttler'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import path from 'path'
import { postgresConfig } from '@app/common/configs'
import { mongoConfig } from '@app/common/configs'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { User } from '@app/user/entities/user.entity'
import { Company } from '@app/company/entities/company.entity'
import { OperatingDay } from '@app/operating-day/entities/operating-day.entity'
import { Address } from '@app/address/entities/address.entity'
import { Payment } from '@app/payment/entities/payment.entity'
import { OpenTime } from '@app/open-time/entities/open-time.entity'
import { Category } from '@app/category/entities/category.entity'
import { Contact } from '@app/contact/entities/contact.entity'
import { Product } from '@app/product/entities/product.entity'
import { AdditionalItem } from '@app/additional-item/entities/additional-item.entity'
import { MongooseModule, MongooseModuleFactoryOptions } from '@nestjs/mongoose'
import { UserRole } from '@app/user-role/entities/user-role.entity'
import { RolesGuard } from '@app/authorization/guards/roles.guard'
import { APP_GUARD } from '@nestjs/core'
import { GqlAuthGuard } from '@app/auth/guard/jwt-auth.guard'

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
        ConfigModule.forFeature(postgresConfig()),
        ConfigModule.forFeature(mongoConfig()),
        HttpModule,
        TerminusModule,
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
              type: configService.get<'postgres'>('postgres.type'),
              host: configService.get<string>('postgres.host'),
              port: configService.get<number>('postgres.port'),
              username: configService.get<string>('postgres.username'),
              password: configService.get<string>('postgres.password'),
              database: configService.get<string>('postgres.name'),
              synchronize: configService.get<boolean>('postgres.synchronize'),
              entities: [
                User,
                Company,
                UserRole,
                Contact,
                Address,
                Payment,
                OperatingDay,
                OpenTime,
                Category,
                Product,
                AdditionalItem
              ],
              autoLoadEntities: false
            }
          }
        }),
        MongooseModule.forRootAsync({
          inject: [ConfigService],
          useFactory: async (configService: ConfigService): Promise<MongooseModuleFactoryOptions> => {
            return {
              dbName: configService.get<string>('mongo.name'),
              user: configService.get<string>('mongo.username'),
              pass: configService.get<string>('mongo.password'),
              uri: configService.get<string>('mongo.url'),
              autoCreate: true
            }
          }
        })
      ],
      providers: [
        StrategyExplorerService,
        CorrelationIdMiddleware,
        HealthService,
        AppConfigService
        // {
        //   provide: APP_GUARD,
        //   useClass: GqlAuthGuard
        // },
        // {
        //   provide: APP_GUARD,
        //   useClass: RolesGuard
        // }
      ],

      exports: [StrategyExplorerService, AppConfigService]
    }
  }
}
