import { registerAs } from '@nestjs/config'
import * as Joi from 'joi'

export const mongoConfig = () =>
  registerAs('mongo', () => {
    const values = {
      url: process.env.DB_MONGO_URL,
      host: process.env.DB_MONGO_HOST,
      name: process.env.DB_MONGO_NAME,
      port: process.env.DB_MONGO_PORT,
      username: process.env.DB_MONGO_USER_ADMIN,
      password: process.env.DB_MONGO_PASSWORD_ADMIN
    }
    const schema = Joi.object({
      url: Joi.string().required(),
      host: Joi.string().required(),
      name: Joi.string().required(),
      port: Joi.number().required(),
      username: Joi.string().required(),
      password: Joi.string().required()
    }).required()
    const { error } = schema.validate(values, { abortEarly: false })
    if (error) {
      throw new Error(error.message)
    }
    return values
  })
