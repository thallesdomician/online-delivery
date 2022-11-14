import { EntityDefault } from '@app/common/entity/base.enity'
import { Company } from '@app/company/entities/company.entity'
import { Product } from '@app/product/entities/product.entity'
import { ObjectType, Field } from '@nestjs/graphql'
import { Entity, ManyToOne, OneToMany } from 'typeorm'

@ObjectType()
@Entity({ name: 'Category' })
export class Category extends EntityDefault {
  @Field(() => Company, { description: 'Dados da Empresa' })
  @ManyToOne(() => Company, (company) => company.categories)
  company: Company

  @OneToMany(() => Product, (product) => product.category)
  products: Product[]
}
