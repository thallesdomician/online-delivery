import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OperatingDayService } from './operating-day.service';
import { OperatingDay } from './entities/operating-day.entity';
import { CreateOperatingDayInput } from './dto/create-operating-day.input';
import { UpdateOperatingDayInput } from './dto/update-operating-day.input';

@Resolver(() => OperatingDay)
export class OperatingDayResolver {
  constructor(private readonly operatingDayService: OperatingDayService) {}

  @Mutation(() => OperatingDay)
  createOperatingDay(@Args('createOperatingDayInput') createOperatingDayInput: CreateOperatingDayInput) {
    return this.operatingDayService.create(createOperatingDayInput);
  }

  @Query(() => [OperatingDay], { name: 'operatingDay' })
  findAll() {
    return this.operatingDayService.findAll();
  }

  @Query(() => OperatingDay, { name: 'operatingDay' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.operatingDayService.findOne(id);
  }

  @Mutation(() => OperatingDay)
  updateOperatingDay(@Args('updateOperatingDayInput') updateOperatingDayInput: UpdateOperatingDayInput) {
    return this.operatingDayService.update(updateOperatingDayInput.id, updateOperatingDayInput);
  }

  @Mutation(() => OperatingDay)
  removeOperatingDay(@Args('id', { type: () => Int }) id: number) {
    return this.operatingDayService.remove(id);
  }
}
