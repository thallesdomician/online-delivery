import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express'

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context)
  }
  getRequest(context: ExecutionContext): Request {
    const ctx = GqlExecutionContext.create(context)
    const { req } = ctx.getContext()
    return req
  }

  handleRequest(err, user) {
    if (err || !user) {
      throw err || new UnauthorizedException()
    }
    return user
  }
}
