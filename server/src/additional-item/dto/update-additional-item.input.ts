import { CreateAdditionalItemInput } from './create-additional-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAdditionalItemInput extends PartialType(CreateAdditionalItemInput) {
  @Field(() => Int)
  id: number;
}
