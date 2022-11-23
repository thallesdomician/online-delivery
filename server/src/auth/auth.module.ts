import { LocalStrategy } from '@app/auth/strategy/local.strategy'
import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { UserModule } from '@app/user/user.module'
import { authConfig } from '@app/auth/configs'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { UserRoleModule } from '@app/user-role/user-role.module'

@Module({
  imports: [
    ConfigModule.forFeature(authConfig()),
    UserModule,
    UserRoleModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('auth.jwt.secret'),
        signOptions: {
          expiresIn: configService.get<string>('auth.jwt.expiration')
        }
      })
    })
  ],
  providers: [AuthService, LocalStrategy, AuthResolver]
})
export class AuthModule {}
