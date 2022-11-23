import { Module } from '@nestjs/common'
import { UserRoleService } from './user-role.service'
import { UserRoleResolver } from './user-role.resolver'
import { UserRole } from '@app/user-role/entities/user-role.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { GqlAuthGuard } from '@app/auth/guard/jwt-auth.guard'
import { RolesGuard } from '@app/authorization/guards/roles.guard'

@Module({
  imports: [TypeOrmModule.forFeature([UserRole]), ConfigModule],
  providers: [
    UserRoleResolver,
    UserRoleService,
    {
      provide: APP_GUARD,
      useClass: GqlAuthGuard
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ],
  exports: [UserRoleService]
})
export class UserRoleModule {}
