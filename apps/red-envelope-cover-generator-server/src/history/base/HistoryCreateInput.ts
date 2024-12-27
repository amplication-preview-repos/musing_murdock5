/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RedEnvelopeCoverWhereUniqueInput } from "../../redEnvelopeCover/base/RedEnvelopeCoverWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { EnumHistoryStatus } from "./EnumHistoryStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class HistoryCreateInput {
  @ApiProperty({
    required: false,
    type: () => RedEnvelopeCoverWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RedEnvelopeCoverWhereUniqueInput)
  @IsOptional()
  @Field(() => RedEnvelopeCoverWhereUniqueInput, {
    nullable: true,
  })
  redEnvelopeCover?: RedEnvelopeCoverWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumHistoryStatus,
  })
  @IsEnum(EnumHistoryStatus)
  @IsOptional()
  @Field(() => EnumHistoryStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timeStamp?: Date | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { HistoryCreateInput as HistoryCreateInput };