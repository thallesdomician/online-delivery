import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { ConfigService } from '@nestjs/config'
// import { UserService } from '@app/user/user.service'
// import { User } from '@app/user/entities/user.entity'
import { JwtPayload } from '@app/authorization/interface/jwt.interface'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(/*private userService: UserService,*/ configService: ConfigService) {
    console.log('secret', configService.get<string>('auth.jwt.secret'))
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('auth.jwt.secret')
    })
  }

  async validate(payload: JwtPayload): Promise<JwtPayload> {
    // const user = await this.userService.findOne(payload.sub)
    if (!payload) {
      throw new UnauthorizedException()
    }
    return payload
  }
}
