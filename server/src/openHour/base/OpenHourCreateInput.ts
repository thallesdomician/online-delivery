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
import { OpeningWeekDayWhereUniqueInput } from "../../openingWeekDay/base/OpeningWeekDayWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class OpenHourCreateInput {
  @ApiProperty({
    required: false,
    type: () => OpeningWeekDayWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OpeningWeekDayWhereUniqueInput)
  @IsOptional()
  @Field(() => OpeningWeekDayWhereUniqueInput, {
    nullable: true,
  })
  openingWeekDays?: OpeningWeekDayWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  startTime?: string | null;
}
export { OpenHourCreateInput };