import { Injectable } from '@nestjs/common';
import { CreateOperatingDayInput } from './dto/create-operating-day.input';
import { UpdateOperatingDayInput } from './dto/update-operating-day.input';

@Injectable()
export class OperatingDayService {
  create(createOperatingDayInput: CreateOperatingDayInput) {
    return 'This action adds a new operatingDay';
  }

  findAll() {
    return `This action returns all operatingDay`;
  }

  findOne(id: number) {
    return `This action returns a #${id} operatingDay`;
  }

  update(id: number, updateOperatingDayInput: UpdateOperatingDayInput) {
    return `This action updates a #${id} operatingDay`;
  }

  remove(id: number) {
    return `This action removes a #${id} operatingDay`;
  }
}
