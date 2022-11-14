import { Injectable } from '@nestjs/common';
import { CreateAdditionalItemInput } from './dto/create-additional-item.input';
import { UpdateAdditionalItemInput } from './dto/update-additional-item.input';

@Injectable()
export class AdditionalItemService {
  create(createAdditionalItemInput: CreateAdditionalItemInput) {
    return 'This action adds a new additionalItem';
  }

  findAll() {
    return `This action returns all additionalItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} additionalItem`;
  }

  update(id: number, updateAdditionalItemInput: UpdateAdditionalItemInput) {
    return `This action updates a #${id} additionalItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} additionalItem`;
  }
}
