import { CreateOpenTimeInput } from './create-open-time.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOpenTimeInput extends PartialType(CreateOpenTimeInput) {
  @Field(() => Int)
  id: number;
}
