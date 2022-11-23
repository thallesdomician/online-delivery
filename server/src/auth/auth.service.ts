import { AuthType } from '@app/auth/dto/auth.type.dto'
import { AuthInput } from '@app/auth/models/auth.input.model'
import { JwtPayload } from '@app/authorization/interface/jwt.interface'
import { UserRole } from '@app/user-role/entities/user-role.entity'
import { UserRoleService } from '@app/user-role/user-role.service'
import { User } from '@app/user/entities/user.entity'
import { UserService } from '@app/user/user.service'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compareSync } from 'bcrypt'
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private userRoleService: UserRoleService,
    private jwtService: JwtService
  ) {}

  async validateUser({ password, username }: AuthInput): Promise<AuthType> {
    const user = await this.userService.findOneBy({ username })
    if (!user) {
      throw new UnauthorizedException('Incorrect user')
    }
    const validPasssword = compareSync(password, user.password)

    if (!validPasssword) {
      throw new UnauthorizedException('Incorrect password')
    }

    const roles = await this.userRoleService.findBy({ user: { id: user.id } }, { user: true })

    const token = await this.jwtToken(user, roles)

    return {
      user,
      token
    }
  }

  private async jwtToken(user: User, userRoles: UserRole[]): Promise<string> {
    const companies = userRoles.map((role) => role.company?.id)
    const roles = userRoles.map((role) => role.type)
    const payload: JwtPayload = {
      username: user.username,
      user: user.id,
      companies,
      roles
    }
    return this.jwtService.signAsync(payload)
  }
}
