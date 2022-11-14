import { EntityDefault } from '@app/common/entity/base.enity'
import { Company } from '@app/company/entities/company.entity'
import { OperatingDay } from '@app/operating-day/entities/operating-day.entity'
import { ObjectType, Field } from '@nestjs/graphql'
import { Entity, ManyToMany, ManyToOne } from 'typeorm'

@ObjectType()
@Entity({ name: 'OpenTime' })
export class OpenTime extends EntityDefault {
  @Field(() => Company, { description: 'Dados da Empresa' })
  @ManyToOne(() => Company, (company) => company.openTimes)
  company: Company

  @ManyToMany(() => OperatingDay, (day) => day.openTimes)
  operatingDays: OperatingDay[]
}
