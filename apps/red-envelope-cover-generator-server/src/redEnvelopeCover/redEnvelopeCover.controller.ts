import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RedEnvelopeCoverService } from "./redEnvelopeCover.service";
import { RedEnvelopeCoverControllerBase } from "./base/redEnvelopeCover.controller.base";

@swagger.ApiTags("redEnvelopeCovers")
@common.Controller("redEnvelopeCovers")
export class RedEnvelopeCoverController extends RedEnvelopeCoverControllerBase {
  constructor(protected readonly service: RedEnvelopeCoverService) {
    super(service);
  }
}
