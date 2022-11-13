import { IAuthenticateConfig } from '@app/auth/interfaces'
import { registerAs } from '@nestjs/config'
import * as Joi from 'joi'

export const authConfig = registerAs('auth', (): IAuthenticateConfig => {
  const values: IAuthenticateConfig = {
    jwt: {
      secret: process.env.JWT_SECRET_KEY
    }
  }

  const schema = Joi.object({
    jwt: Joi.object({
      secret: Joi.string().required()
    }).required()
  }).required()

  const { error } = schema.validate(values, { abortEarly: false })

  if (error) {
    throw new Error(error.message)
  }

  return values
})
