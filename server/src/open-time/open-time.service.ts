import { Injectable } from '@nestjs/common';
import { CreateOpenTimeInput } from './dto/create-open-time.input';
import { UpdateOpenTimeInput } from './dto/update-open-time.input';

@Injectable()
export class OpenTimeService {
  create(createOpenTimeInput: CreateOpenTimeInput) {
    return 'This action adds a new openTime';
  }

  findAll() {
    return `This action returns all openTime`;
  }

  findOne(id: number) {
    return `This action returns a #${id} openTime`;
  }

  update(id: number, updateOpenTimeInput: UpdateOpenTimeInput) {
    return `This action updates a #${id} openTime`;
  }

  remove(id: number) {
    return `This action removes a #${id} openTime`;
  }
}
