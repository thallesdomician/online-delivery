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
import { ContactCreateNestedManyWithoutStoresInput } from "./ContactCreateNestedManyWithoutStoresInput";
import { OpeningWeekDayCreateNestedManyWithoutStoresInput } from "./OpeningWeekDayCreateNestedManyWithoutStoresInput";
import { ProductCreateNestedManyWithoutStoresInput } from "./ProductCreateNestedManyWithoutStoresInput";
import { UserCreateNestedManyWithoutStoresInput } from "./UserCreateNestedManyWithoutStoresInput";
@InputType()
class StoreCreateInput {
  @ApiProperty({
    required: true,
    type: () => AddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AddressWhereUniqueInput)
  @Field(() => AddressWhereUniqueInput)
  address!: AddressWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ContactCreateNestedManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => ContactCreateNestedManyWithoutStoresInput)
  @IsOptional()
  @Field(() => ContactCreateNestedManyWithoutStoresInput, {
    nullable: true,
  })
  contact?: ContactCreateNestedManyWithoutStoresInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => OpeningWeekDayCreateNestedManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => OpeningWeekDayCreateNestedManyWithoutStoresInput)
  @IsOptional()
  @Field(() => OpeningWeekDayCreateNestedManyWithoutStoresInput, {
    nullable: true,
  })
  openingWeekDays?: OpeningWeekDayCreateNestedManyWithoutStoresInput;

  @ApiProperty({
    required: false,
    type: () => ProductCreateNestedManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => ProductCreateNestedManyWithoutStoresInput)
  @IsOptional()
  @Field(() => ProductCreateNestedManyWithoutStoresInput, {
    nullable: true,
  })
  products?: ProductCreateNestedManyWithoutStoresInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  slug!: string;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutStoresInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutStoresInput, {
    nullable: true,
  })
  user?: UserCreateNestedManyWithoutStoresInput;
}
export { StoreCreateInput };
