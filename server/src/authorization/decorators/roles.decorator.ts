import { ERole } from '@app/authorization/enum/roles.enum'
import { SetMetadata } from '@nestjs/common'

export const ROLES_KEY = 'roles'
export const Roles = (...roles: ERole[]) => SetMetadata(ROLES_KEY, roles)
