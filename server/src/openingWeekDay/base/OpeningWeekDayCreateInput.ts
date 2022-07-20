/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OpenHourCreateNestedManyWithoutOpeningWeekDaysInput } from "./OpenHourCreateNestedManyWithoutOpeningWeekDaysInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumOpeningWeekDayWeekday } from "./EnumOpeningWeekDayWeekday";
@InputType()
class OpeningWeekDayCreateInput {
  @ApiProperty({
    required: false,
    type: () => OpenHourCreateNestedManyWithoutOpeningWeekDaysInput,
  })
  @ValidateNested()
  @Type(() => OpenHourCreateNestedManyWithoutOpeningWeekDaysInput)
  @IsOptional()
  @Field(() => OpenHourCreateNestedManyWithoutOpeningWeekDaysInput, {
    nullable: true,
  })
  openHour?: OpenHourCreateNestedManyWithoutOpeningWeekDaysInput;

  @ApiProperty({
    required: true,
    enum: EnumOpeningWeekDayWeekday,
    isArray: true,
  })
  @IsEnum(EnumOpeningWeekDayWeekday, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumOpeningWeekDayWeekday], {
    nullable: true,
  })
  weekday?: Array<
    "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "saturday"
  >;
}
export { OpeningWeekDayCreateInput };