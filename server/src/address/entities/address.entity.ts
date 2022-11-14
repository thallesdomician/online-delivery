import { EntityDefault } from '@app/common/entity/base.enity'
import { Company } from '@app/company/entities/company.entity'
import { ObjectType, Field } from '@nestjs/graphql'
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'

@ObjectType()
@Entity({ name: 'Address' })
export class Address extends EntityDefault {
  @Field(() => String, { description: 'Logradouro' })
  @Column('varchar', { nullable: true, length: 100 })
  street: string

  @Field(() => String, { description: 'número' })
  @Column('varchar', { nullable: true, length: 10 })
  number: string

  @Field(() => String, { description: 'Complemento' })
  @Column('varchar', { nullable: true, length: 30 })
  complement: string

  @Field(() => String, { description: 'Bairro' })
  @Column('varchar', { nullable: true, length: 50 })
  district: string

  @Field(() => String, { description: 'Cidade' })
  @Column('varchar', { nullable: true, length: 150 })
  city: string

  @Field(() => String, { description: 'CEP' })
  @Column('varchar', { nullable: true, length: 8 })
  zipcode: string

  @OneToOne(() => Company)
  @JoinColumn()
  company: string
}
