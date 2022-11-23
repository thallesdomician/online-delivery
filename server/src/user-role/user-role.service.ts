import { Company } from '@app/company/entities/company.entity'
import { UserRole } from '@app/user-role/entities/user-role.entity'
import { User } from '@app/user/entities/user.entity'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindOptionsRelations, FindOptionsWhere, Repository } from 'typeorm'
import { CreateUserRoleInput } from './dto/create-user-role.input'
import { UpdateUserRoleInput } from './dto/update-user-role.input'

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRole)
    private readonly userRepository: Repository<UserRole>
  ) {}
  create(createUserRoleInput: CreateUserRoleInput) {
    return 'This action adds a new userRole'
  }

  findAll() {
    return `This action returns all userRole`
  }

  findOne(id: number) {
    return `This action returns a #${id} userRole`
  }

  findBy(where: FindOptionsWhere<UserRole>, relations: FindOptionsRelations<UserRole>) {
    try {
      return this.userRepository.find({ where, relations })
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  update(id: number, updateUserRoleInput: UpdateUserRoleInput) {
    return `This action updates a #${id} userRole`
  }

  remove(id: number) {
    return `This action removes a #${id} userRole`
  }
}
