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
import { AddressWhereUniqueInput } from "../../address/base/AddressWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ContactUpdateManyWithoutStoresInput } from "./ContactUpdateManyWithoutStoresInput";
import { OpeningWeekDayUpdateManyWithoutStoresInput } from "./OpeningWeekDayUpdateManyWithoutStoresInput";
import { ProductUpdateManyWithoutStoresInput } from "./ProductUpdateManyWithoutStoresInput";
import { UserUpdateManyWithoutStoresInput } from "./UserUpdateManyWithoutStoresInput";
@InputType()
class StoreUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AddressWhereUniqueInput)
  @IsOptional()
  @Field(() => AddressWhereUniqueInput, {
    nullable: true,
  })
  address?: AddressWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ContactUpdateManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => ContactUpdateManyWithoutStoresInput)
  @IsOptional()
  @Field(() => ContactUpdateManyWithoutStoresInput, {
    nullable: true,
  })
  contact?: ContactUpdateManyWithoutStoresInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => OpeningWeekDayUpdateManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => OpeningWeekDayUpdateManyWithoutStoresInput)
  @IsOptional()
  @Field(() => OpeningWeekDayUpdateManyWithoutStoresInput, {
    nullable: true,
  })
  openingWeekDays?: OpeningWeekDayUpdateManyWithoutStoresInput;

  @ApiProperty({
    required: false,
    type: () => ProductUpdateManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => ProductUpdateManyWithoutStoresInput)
  @IsOptional()
  @Field(() => ProductUpdateManyWithoutStoresInput, {
    nullable: true,
  })
  products?: ProductUpdateManyWithoutStoresInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  slug?: string;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutStoresInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutStoresInput, {
    nullable: true,
  })
  user?: UserUpdateManyWithoutStoresInput;
}
export { StoreUpdateInput };
