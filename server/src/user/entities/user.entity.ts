import { EntityDefault } from '@app/common/entity/base.enity'
import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity } from 'typeorm'

@ObjectType()
@Entity({ name: 'User' })
export class User extends EntityDefault {
  @Field(() => String, { description: 'username' })
  @Column({ unique: true, length: 42, name: 'Username', nullable: false })
  username: string

  @Column({ unique: true, length: 42, name: 'Password', nullable: false })
  password: string
}
