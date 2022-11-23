import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { UserService } from './user.service'
import { User } from './entities/user.entity'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { GqlAuthGuard } from '@app/auth/guard/jwt-auth.guard'
import { UseGuards } from '@nestjs/common'
import { CurrentUser } from '@app/auth/decorator/user.decorator'
import { JwtPayload } from '@app/authorization/interface/jwt.interface'

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput)
  }

  // @Roles(ERole.Admin)
  @UseGuards(GqlAuthGuard)
  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll()
  }

  // @UseGuards(GqlAuthGuard)
  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.userService.findOne(id)
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput)
  }

  @Mutation(() => User)
  updateI(@Args('updateUserInput') updateUserInput: UpdateUserInput, @CurrentUser() payload: JwtPayload) {
    return this.userService.update(payload.user, updateUserInput)
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id)
  }

  @Query(() => User)
  whoAmI(@CurrentUser() payload: JwtPayload) {
    return this.userService.findOne(payload.user)
  }
}
