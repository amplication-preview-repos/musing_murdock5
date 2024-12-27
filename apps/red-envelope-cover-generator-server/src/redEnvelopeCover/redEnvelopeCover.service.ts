import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RedEnvelopeCoverServiceBase } from "./base/redEnvelopeCover.service.base";

@Injectable()
export class RedEnvelopeCoverService extends RedEnvelopeCoverServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
