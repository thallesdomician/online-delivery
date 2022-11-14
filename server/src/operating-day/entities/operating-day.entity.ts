import { EntityDefault } from '@app/common/entity/base.enity'
import { Company } from '@app/company/entities/company.entity'
import { OpenTime } from '@app/open-time/entities/open-time.entity'
import { EWeekeDay } from '@app/operating-day/enum/operation-day.enum'
import { ObjectType, Field, registerEnumType } from '@nestjs/graphql'
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm'

registerEnumType(EWeekeDay, { name: 'EWeekeDay' })

@ObjectType()
@Entity({ name: 'OperatingDay' })
export class OperatingDay extends EntityDefault {
  @Column({
    enum: EWeekeDay,
    type: 'enum'
  })
  @Field(() => EWeekeDay)
  day: EWeekeDay

  @ManyToMany(() => OpenTime, (time) => time.operatingDays)
  @JoinTable({ name: 'OperatingDayTime' })
  openTimes: OpenTime[]

  @Field(() => Company, { description: 'Dados da Empresa' })
  @ManyToOne(() => Company, (company) => company.operatingDays)
  company: Company
}
