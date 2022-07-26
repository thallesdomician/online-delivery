import { registerDecorator, ValidationOptions, ValidationArguments, buildMessage } from 'class-validator'

export function IsOnlyDate(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsOnlyDate',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          const regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
          return typeof value === 'string' && regex.test(value)
        },
        defaultMessage: buildMessage(() => {
          return `$property must be formatted as YYYY-MM-DD`
        }, validationOptions)
      }
    })
  }
}
