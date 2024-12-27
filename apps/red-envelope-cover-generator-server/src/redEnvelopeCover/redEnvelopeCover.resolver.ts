import * as graphql from "@nestjs/graphql";
import { RedEnvelopeCoverResolverBase } from "./base/redEnvelopeCover.resolver.base";
import { RedEnvelopeCover } from "./base/RedEnvelopeCover";
import { RedEnvelopeCoverService } from "./redEnvelopeCover.service";

@graphql.Resolver(() => RedEnvelopeCover)
export class RedEnvelopeCoverResolver extends RedEnvelopeCoverResolverBase {
  constructor(protected readonly service: RedEnvelopeCoverService) {
    super(service);
  }
}
