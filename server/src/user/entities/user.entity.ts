import { hashPasswordTransform } from '@app/auth/commom/transformers/cypto-transform'
import { EntityDefault } from '@app/common/entity/base.enity'
import { UserRole } from '@app/user-role/entities/user-role.entity'
import { Field, HideField, ObjectType } from '@nestjs/graphql'
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'

@ObjectType()
@Entity({ name: 'User' })
export class User extends EntityDefault {
  @Field(() => String, { description: 'username', nullable: true })
  @Column({ unique: true, length: 42, name: 'Username', nullable: false })
  username: string

  @Column({ length: 100, name: 'Password', nullable: false, transformer: hashPasswordTransform })
  @HideField()
  password: string

  @Field(() => String, { description: 'name', nullable: true })
  @Column({ length: 100, name: 'Name', nullable: true })
  name: string

  @Field(() => String, { description: 'cpf', nullable: true })
  @Column({ length: 11, name: 'CPF', nullable: true })
  cpf: string

  @Field(() => UserRole, { description: 'Dados da Empresa' })
  @OneToMany(() => UserRole, (role) => role.user)
  roles: UserRole[]
}
