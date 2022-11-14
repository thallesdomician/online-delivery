import { EntityDefault } from '@app/common/entity/base.enity'
import { Company } from '@app/company/entities/company.entity'
import { ObjectType, Field } from '@nestjs/graphql'
import { Entity, ManyToOne } from 'typeorm'

@ObjectType({ description: 'Forma de pagamento' })
@Entity({ name: 'Payment' })
export class Payment extends EntityDefault {
  @Field(() => Company, { description: 'Dados da Empresa Empresa' })
  @ManyToOne(() => Company, (company) => company.payments)
  company: Company
}
