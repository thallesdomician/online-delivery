import { registerAs } from '@nestjs/config'
import * as Joi from 'joi'

export const authConfig = () =>
  registerAs('auth', () => {
    const values = {
      jwt: {
        secret: process.env.JWT_SECRET_KEY,
        expiration: process.env.JWT_EXPIRATION
      }
    }
    const schema = Joi.object({
      jwt: Joi.object({ secret: Joi.string().required(), expiration: Joi.string().required() })
    }).required()
    const { error } = schema.validate(values, { abortEarly: false })
    if (error) {
      throw new Error(error.message)
    }
    return values
  })
