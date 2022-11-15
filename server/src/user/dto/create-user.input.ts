import { IsCPF } from '@app/shared/validators/cpf'
import { InputType, Field } from '@nestjs/graphql'
import { IsNotEmpty, IsString, MaxLength } from 'class-validator'

@InputType()
export class CreateUserInput {
  @MaxLength(42)
  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: 'username', nullable: true })
  username: string

  @MaxLength(42)
  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: 'password', nullable: true })
  password: string

  @MaxLength(42)
  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: 'name', nullable: true })
  name: string

  @IsCPF()
  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: 'cpf', nullable: true })
  cpf: string
}
