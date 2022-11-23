import { AuthService } from '@app/auth/auth.service'
import { AuthType } from '@app/auth/dto/auth.type.dto'
import { AuthInput } from '@app/auth/models/auth.input.model'
import { Args, Mutation, Resolver } from '@nestjs/graphql'

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthType)
  public async login(@Args('data') data: AuthInput): Promise<AuthType> {
    const response = await this.authService.validateUser(data)

    return {
      user: response.user,
      token: response.token
    }
  }
}
