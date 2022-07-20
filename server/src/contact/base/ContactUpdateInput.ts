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
import { EnumContactValue } from "./EnumContactValue";
import { IsEnum, IsOptional } from "class-validator";
@InputType()
class ContactUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumContactValue,
    isArray: true,
  })
  @IsEnum(EnumContactValue, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumContactValue], {
    nullable: true,
  })
  value?: Array<"whatsapp" | "mail" | "cellPhone" | "phone">;
}
export { ContactUpdateInput };
