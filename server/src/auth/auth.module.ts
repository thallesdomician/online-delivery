import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from '@app/auth/strategies'
import { authConfig } from '@app/auth/config'
import { ConfigModule as NestConfigModule } from '@nestjs/config'

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' }), NestConfigModule.forFeature(authConfig)],
  providers: [JwtStrategy],
  exports: [PassportModule, JwtStrategy]
})
export class AuthModule {}
