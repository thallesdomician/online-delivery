import { ERole } from '@app/authorization/enum/roles.enum'
import { JwtPayload as JWTBase } from 'jsonwebtoken'

export interface JwtPayload extends JWTBase {
  roles: ERole[]
  user: string
  companies?: string[]
}
