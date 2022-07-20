import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { OpenHourServiceBase } from "./base/openHour.service.base";

@Injectable()
export class OpenHourService extends OpenHourServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
