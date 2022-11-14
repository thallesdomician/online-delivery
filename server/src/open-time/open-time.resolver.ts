import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OpenTimeService } from './open-time.service';
import { OpenTime } from './entities/open-time.entity';
import { CreateOpenTimeInput } from './dto/create-open-time.input';
import { UpdateOpenTimeInput } from './dto/update-open-time.input';

@Resolver(() => OpenTime)
export class OpenTimeResolver {
  constructor(private readonly openTimeService: OpenTimeService) {}

  @Mutation(() => OpenTime)
  createOpenTime(@Args('createOpenTimeInput') createOpenTimeInput: CreateOpenTimeInput) {
    return this.openTimeService.create(createOpenTimeInput);
  }

  @Query(() => [OpenTime], { name: 'openTime' })
  findAll() {
    return this.openTimeService.findAll();
  }

  @Query(() => OpenTime, { name: 'openTime' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.openTimeService.findOne(id);
  }

  @Mutation(() => OpenTime)
  updateOpenTime(@Args('updateOpenTimeInput') updateOpenTimeInput: UpdateOpenTimeInput) {
    return this.openTimeService.update(updateOpenTimeInput.id, updateOpenTimeInput);
  }

  @Mutation(() => OpenTime)
  removeOpenTime(@Args('id', { type: () => Int }) id: number) {
    return this.openTimeService.remove(id);
  }
}
