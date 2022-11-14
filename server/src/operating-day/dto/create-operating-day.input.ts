import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOperatingDayInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
