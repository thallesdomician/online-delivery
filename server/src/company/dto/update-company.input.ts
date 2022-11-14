import { CreateCompanyInput } from './create-company.input'
import { InputType, Field, PartialType, Float } from '@nestjs/graphql'
import { IsNotEmpty, IsOptional, IsString, IsUUID, Matches, MaxLength } from 'class-validator'

@InputType()
export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {
  @Field(() => String)
  @IsUUID('4')
  @IsNotEmpty()
  id: string

  @Field(() => String, { description: 'Slug único', nullable: true })
  @IsString()
  @IsNotEmpty()
  @Matches('^[a-z](-?[a-z])*$')
  @MaxLength(60)
  slug?: string

  @Field(() => Float, { description: 'Pedido mínimo', nullable: true })
  @IsOptional()
  minimumOrder?: number

  @Field(() => String, { description: 'Descricao da Empresa', nullable: true })
  @IsOptional()
  @IsString()
  description?: string
}
