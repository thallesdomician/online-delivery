import { ERole } from '@app/authorization/enum/roles.enum'
import { EntityDefault } from '@app/common/entity/base.enity'
import { Company } from '@app/company/entities/company.entity'
import { User } from '@app/user/entities/user.entity'
import { ObjectType, Field, registerEnumType } from '@nestjs/graphql'
import { Column, Entity, ManyToOne } from 'typeorm'

registerEnumType(ERole, { name: 'Role' })

@ObjectType()
@Entity({ name: 'UserRole' })
export class UserRole extends EntityDefault {
  @Field(() => User, { description: 'dados do User' })
  @ManyToOne(() => User, (user) => user.roles)
  user: User

  @Field(() => Company, { description: 'Dados da Empresa', nullable: true })
  @ManyToOne(() => Company, (company) => company.roles, { nullable: true })
  company?: Company

  @Field(() => ERole, { description: 'Tipo de Contato' })
  @Column({
    enum: ERole,
    type: 'enum'
  })
  type: ERole
}
