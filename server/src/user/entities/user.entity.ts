import { EntityDefault } from '@app/common/entity/base.enity'
import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity } from 'typeorm'

@ObjectType()
@Entity({ name: 'User' })
export class User extends EntityDefault {
  @Field(() => String, { description: 'username', nullable: true })
  @Column({ unique: true, length: 42, name: 'Username', nullable: false })
  username: string

  @Column({ length: 100, name: 'Password', nullable: false })
  password: string

  @Field(() => String, { description: 'name', nullable: true })
  @Column({ length: 100, name: 'Name', nullable: true })
  name: string

  @Field(() => String, { description: 'cpf', nullable: true })
  @Column({ length: 11, name: 'CPF', nullable: true })
  cpf: string
}
