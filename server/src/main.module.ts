import { CommonModule } from '@app/common/common.module'
import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { CompanyModule } from './company/company.module'
import { OperatingDayModule } from './operating-day/operating-day.module'
import { OpenTimeModule } from './open-time/open-time.module'
import { ContactModule } from './contact/contact.module'
import { CategoryModule } from './category/category.module'
import { PaymentModule } from './payment/payment.module'
import { AddressModule } from './address/address.module'
import { ProductModule } from './product/product.module'
import { AdditionalItemModule } from './additional-item/additional-item.module'

@Module({
  imports: [
    CommonModule.register({
      configModule: {
        ignoreEnvFile: ['production', 'staging'].includes(process.env.NODE_ENV),
        envFilePath: '.env',
        expandVariables: ['development', 'test'].includes(process.env.NODE_ENV),
        cache: ['production', 'staging'].includes(process.env.NODE_ENV),
        isGlobal: true
      }
    }),
    AuthModule,
    UserModule,
    CompanyModule,
    OperatingDayModule,
    OpenTimeModule,
    ContactModule,
    CategoryModule,
    PaymentModule,
    AddressModule,
    ProductModule,
    AdditionalItemModule
  ],
  providers: []
})
export class MainModule {}
