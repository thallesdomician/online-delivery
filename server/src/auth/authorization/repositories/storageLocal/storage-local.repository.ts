import { AbstractRepository } from '@app/auth/authorization/repositories/abstract-repository.repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class StorageLocalRepository implements AbstractRepository<string> {
  private registry: string[] = ['admin']

  async findAll(): Promise<string[]> {
    return this.registry
  }
}
