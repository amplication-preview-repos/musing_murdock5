import { Module } from "@nestjs/common";
import { RedEnvelopeCoverModuleBase } from "./base/redEnvelopeCover.module.base";
import { RedEnvelopeCoverService } from "./redEnvelopeCover.service";
import { RedEnvelopeCoverController } from "./redEnvelopeCover.controller";
import { RedEnvelopeCoverResolver } from "./redEnvelopeCover.resolver";

@Module({
  imports: [RedEnvelopeCoverModuleBase],
  controllers: [RedEnvelopeCoverController],
  providers: [RedEnvelopeCoverService, RedEnvelopeCoverResolver],
  exports: [RedEnvelopeCoverService],
})
export class RedEnvelopeCoverModule {}
