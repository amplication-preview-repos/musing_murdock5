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
import { HistoryUpdateManyWithoutRedEnvelopeCoversInput } from "./HistoryUpdateManyWithoutRedEnvelopeCoversInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RedEnvelopeCoverUpdateInput {
  @ApiProperty({
    required: false,
    type: () => HistoryUpdateManyWithoutRedEnvelopeCoversInput,
  })
  @ValidateNested()
  @Type(() => HistoryUpdateManyWithoutRedEnvelopeCoversInput)
  @IsOptional()
  @Field(() => HistoryUpdateManyWithoutRedEnvelopeCoversInput, {
    nullable: true,
  })
  histories?: HistoryUpdateManyWithoutRedEnvelopeCoversInput;
}

export { RedEnvelopeCoverUpdateInput as RedEnvelopeCoverUpdateInput };
