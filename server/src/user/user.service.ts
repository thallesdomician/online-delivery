import { User } from '@app/user/entities/user.entity'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindOptionsWhere, Repository } from 'typeorm'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import bcrypt from 'bcrypt'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class UserService {
  secret: string
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly configService: ConfigService
  ) {
    this.secret = this.configService.get<string>('authentication.secret.rounds')
  }
  async create(createUserInput: CreateUserInput) {
    try {
      const { secret } = this
      console.log(secret)

      createUserInput.password = await bcrypt.hash(createUserInput.password, secret)

      const user = this.userRepository.create(createUserInput)
      return this.userRepository.save(user)
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  findAll() {
    return `This action returns all user`
  }

  findOne(id: string) {
    try {
      return this.userRepository.findOneBy({ id })
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  findOneBy(where: FindOptionsWhere<User>) {
    try {
      return this.userRepository.findOneBy(where)
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
