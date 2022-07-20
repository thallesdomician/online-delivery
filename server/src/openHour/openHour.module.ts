import { Module } from "@nestjs/common";
import { OpenHourModuleBase } from "./base/openHour.module.base";
import { OpenHourService } from "./openHour.service";
import { OpenHourController } from "./openHour.controller";
import { OpenHourResolver } from "./openHour.resolver";

@Module({
  imports: [OpenHourModuleBase],
  controllers: [OpenHourController],
  providers: [OpenHourService, OpenHourResolver],
  exports: [OpenHourService],
})
export class OpenHourModule {}
