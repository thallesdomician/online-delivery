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
import { databaseConfig } from '@app/common/configs'
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
              entities: [
                User,
                Company,
                Contact,
                Address,
                Payment,
                OperatingDay,
                OpenTime,
                Category,
                Product,
                AdditionalItem
              ],
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
