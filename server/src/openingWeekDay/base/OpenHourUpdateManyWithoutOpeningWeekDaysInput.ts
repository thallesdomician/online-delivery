/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OpenHourWhereUniqueInput } from "../../openHour/base/OpenHourWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class OpenHourUpdateManyWithoutOpeningWeekDaysInput {
  @Field(() => [OpenHourWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OpenHourWhereUniqueInput],
  })
  connect?: Array<OpenHourWhereUniqueInput>;

  @Field(() => [OpenHourWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OpenHourWhereUniqueInput],
  })
  disconnect?: Array<OpenHourWhereUniqueInput>;

  @Field(() => [OpenHourWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OpenHourWhereUniqueInput],
  })
  set?: Array<OpenHourWhereUniqueInput>;
}
export { OpenHourUpdateManyWithoutOpeningWeekDaysInput };
