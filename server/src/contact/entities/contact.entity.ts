import { EntityDefault } from '@app/common/entity/base.enity'
import { Company } from '@app/company/entities/company.entity'
import { EContactType } from '@app/contact/enum/contact.enum'
import { ObjectType, Field, registerEnumType } from '@nestjs/graphql'
import { Column, Entity, ManyToOne } from 'typeorm'

registerEnumType(EContactType, { name: 'EContactType' })

@ObjectType()
@Entity({ name: 'Contact' })
export class Contact extends EntityDefault {
  @Field(() => EContactType, { description: 'Tipo de Contato' })
  @Column({
    enum: EContactType,
    type: 'enum'
  })
  type: EContactType

  @Field(() => String, { description: 'Valor' })
  @Column('varchar', { nullable: false, length: 50 })
  value: string

  @Field(() => Company, { description: 'Dados da Empresa' })
  @ManyToOne(() => Company, (company) => company.contacts)
  company: Company
}
