import { ROLES_KEY } from '@app/authorization/decorators/roles.decorator'
import { ERole } from '@app/authorization/enum/roles.enum'
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context)
    const requiredRoles = this.reflector.getAllAndOverride<ERole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ])
    if (!requiredRoles) {
      return true
    }
    const { user } = ctx.getContext().req
    return requiredRoles.some((role) => user?.roles?.includes(role))
  }
}
