import { AdditionalItem } from '@app/additional-item/entities/additional-item.entity'
import { Category } from '@app/category/entities/category.entity'
import { EntityDefault } from '@app/common/entity/base.enity'
import { Contact } from '@app/contact/entities/contact.entity'
import { OpenTime } from '@app/open-time/entities/open-time.entity'
import { OperatingDay } from '@app/operating-day/entities/operating-day.entity'
import { Payment } from '@app/payment/entities/payment.entity'
import { Product } from '@app/product/entities/product.entity'
import { ObjectType, Field, Float } from '@nestjs/graphql'
import { Column, Entity, Index, OneToMany } from 'typeorm'

@ObjectType({ description: 'Dados da Empresa' })
@Entity({ name: 'Company' })
export class Company extends EntityDefault {
  @Field(() => String, { description: 'Nome da Empresa' })
  @Column('varchar', { length: 60, nullable: false })
  name: string

  @Field(() => String, { description: 'slug' })
  @Index({ unique: true })
  @Column('varchar', { length: 60, nullable: false })
  slug: string

  @Field(() => String, { description: 'Descricao da Empresa' })
  @Column('text', { nullable: true })
  description: string

  @Field(() => Float, { description: 'Pedido mínimo' })
  @Column('float', { default: 0 })
  minimumOrder: number

  @OneToMany(() => Payment, (payment) => payment.company)
  payments: Payment[]

  @OneToMany(() => OperatingDay, (day) => day.company)
  operatingDays: OperatingDay[]

  @OneToMany(() => OpenTime, (time) => time.company)
  openTimes: OpenTime[]

  @OneToMany(() => Category, (category) => category.company)
  categories: Category[]

  @OneToMany(() => Contact, (contact) => contact.company)
  contacts: Contact[]

  @OneToMany(() => Product, (product) => product.company)
  products: Product[]

  @OneToMany(() => AdditionalItem, (additionalItem) => additionalItem.company)
  additionalItems: AdditionalItem[]
}
