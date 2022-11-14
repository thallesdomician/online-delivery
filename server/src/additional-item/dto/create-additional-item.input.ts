import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAdditionalItemInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
