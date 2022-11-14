import { CreateOperatingDayInput } from './create-operating-day.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOperatingDayInput extends PartialType(CreateOperatingDayInput) {
  @Field(() => Int)
  id: number;
}
