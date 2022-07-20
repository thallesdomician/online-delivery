import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { OpeningWeekDayServiceBase } from "./base/openingWeekDay.service.base";

@Injectable()
export class OpeningWeekDayService extends OpeningWeekDayServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
