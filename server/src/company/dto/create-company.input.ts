import { InputType, Field } from '@nestjs/graphql'
import { IsNotEmpty, IsString, MaxLength } from 'class-validator'

@InputType()
export class CreateCompanyInput {
  @Field(() => String, { description: 'Nome da Empresa' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  name: string
}
