import { AdditionalItem } from '@app/additional-item/entities/additional-item.entity'
import { Category } from '@app/category/entities/category.entity'
import { EntityDefault } from '@app/common/entity/base.enity'
import { Company } from '@app/company/entities/company.entity'
import { ObjectType, Field } from '@nestjs/graphql'
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm'

@ObjectType()
@Entity({ name: 'Product' })
export class Product extends EntityDefault {
  @Field(() => Company, { description: 'Dados da Empresa' })
  @ManyToOne(() => Company, (company) => company.products)
  company: Company

  @Field(() => String, { description: 'Nome do Produto' })
  @Column('varchar', { length: 60, nullable: false })
  name: string

  @Field(() => String, { description: 'Descricao do Produto' })
  @Column('text', { nullable: true })
  description: string

  @Field(() => Category, { description: 'Categoria do Produto' })
  @ManyToOne(() => Category, (category) => category.products)
  category: Category

  @ManyToOne(() => Product, (product) => product.complements)
  product: Product

  @OneToMany(() => Product, (product) => product.product)
  complements: Product[]

  @ManyToMany(() => AdditionalItem, (additionalItem) => additionalItem.products)
  @JoinTable({ name: 'ProductAdditionalItem' })
  additionalItems: AdditionalItem[]
}
