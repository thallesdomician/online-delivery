import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class AuthInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  username: string

  @IsNotEmpty()
  @IsString()
  @Field()
  password: string
}
