import { ITokenJwt } from '@app/auth/interface/token.interface'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Token implements ITokenJwt {
  @Field({ description: 'Token JWT' })
  access_token: string

  @Field({ description: 'Token Refresh' })
  refresh_token: string
}
