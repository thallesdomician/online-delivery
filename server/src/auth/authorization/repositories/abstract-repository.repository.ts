import { IFind } from '@app/auth/authorization/interfaces/repositories/find.interface'

export abstract class AbstractRepository<T> implements IFind {
  abstract findAll(): Promise<T[]>
}
