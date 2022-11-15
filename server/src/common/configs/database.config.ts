import { registerAs } from '@nestjs/config'
import * as Joi from 'joi'

export const postgresConfig = () =>
  registerAs('postgres', () => {
    const values = {
      type: process.env.DB_POSTGRES_TYPE,
      host: process.env.DB_POSTGRES_HOST,
      port: process.env.DB_POSTGRES_PORT,
      username: process.env.DB_POSTGRES_USER,
      password: process.env.DB_POSTGRES_PASSWORD,
      name: process.env.DB_POSTGRES_NAME,
      synchronize: process.env.DB_POSTGRES_SYNC_OPT,
      dropSchema: process.env.DB_POSTGRES_DROP_SCHEMA
    }
    const schema = Joi.object({
      type: Joi.string().required(),
      host: Joi.string().required(),
      port: Joi.number().required(),
      username: Joi.string().required(),
      password: Joi.string().required(),
      name: Joi.string().required(),
      synchronize: Joi.boolean(),
      dropSchema: Joi.boolean()
    }).required()
    const { error } = schema.validate(values, { abortEarly: false })
    if (error) {
      throw new Error(error.message)
    }
    return values
  })
