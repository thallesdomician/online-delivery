import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '@app/user/entities/user.entity'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [TypeOrmModule.forFeature([User]), ConfigModule],
  providers: [UserResolver, UserService],
  exports: [UserService]
})
export class UserModule {}
