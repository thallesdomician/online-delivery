import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdditionalItemService } from './additional-item.service';
import { AdditionalItem } from './entities/additional-item.entity';
import { CreateAdditionalItemInput } from './dto/create-additional-item.input';
import { UpdateAdditionalItemInput } from './dto/update-additional-item.input';

@Resolver(() => AdditionalItem)
export class AdditionalItemResolver {
  constructor(private readonly additionalItemService: AdditionalItemService) {}

  @Mutation(() => AdditionalItem)
  createAdditionalItem(@Args('createAdditionalItemInput') createAdditionalItemInput: CreateAdditionalItemInput) {
    return this.additionalItemService.create(createAdditionalItemInput);
  }

  @Query(() => [AdditionalItem], { name: 'additionalItem' })
  findAll() {
    return this.additionalItemService.findAll();
  }

  @Query(() => AdditionalItem, { name: 'additionalItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.additionalItemService.findOne(id);
  }

  @Mutation(() => AdditionalItem)
  updateAdditionalItem(@Args('updateAdditionalItemInput') updateAdditionalItemInput: UpdateAdditionalItemInput) {
    return this.additionalItemService.update(updateAdditionalItemInput.id, updateAdditionalItemInput);
  }

  @Mutation(() => AdditionalItem)
  removeAdditionalItem(@Args('id', { type: () => Int }) id: number) {
    return this.additionalItemService.remove(id);
  }
}
