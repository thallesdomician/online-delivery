import { EntityDefault } from '@app/common/entity/base.enity'
import { Company } from '@app/company/entities/company.entity'
import { Product } from '@app/product/entities/product.entity'
import { ObjectType, Field } from '@nestjs/graphql'
import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm'

@ObjectType()
@Entity({ name: 'AdditionalItem' })
export class AdditionalItem extends EntityDefault {
  @Field(() => Company, { description: 'Dados da Empresa' })
  @ManyToOne(() => Company, (company) => company.additionalItems)
  company: Company

  @Field(() => String, { description: 'Nome do Item Adicional' })
  @Column('varchar', { length: 60, nullable: false })
  name: string

  @Field(() => String, { description: 'Descricao do Item' })
  @Column('text', { nullable: true })
  description: string

  @ManyToMany(() => Product, (product) => product.additionalItems)
  products: Product[]
}
