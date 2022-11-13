import { Field } from '@nestjs/graphql'
import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

export abstract class EntityDefault extends BaseEntity {
  @Field(() => String, { description: 'UUID', name: 'uuid' })
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  uuid: string

  @CreateDateColumn({
    type: 'timestamp',
    name: 'createddAt',
    default: () => 'CURRENT_TIMESTAMP(6)'
  })
  created: Date

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updatedAt',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)'
  })
  updated: Date
}
