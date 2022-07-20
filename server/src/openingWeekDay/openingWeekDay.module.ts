import { Module } from "@nestjs/common";
import { OpeningWeekDayModuleBase } from "./base/openingWeekDay.module.base";
import { OpeningWeekDayService } from "./openingWeekDay.service";
import { OpeningWeekDayController } from "./openingWeekDay.controller";
import { OpeningWeekDayResolver } from "./openingWeekDay.resolver";

@Module({
  imports: [OpeningWeekDayModuleBase],
  controllers: [OpeningWeekDayController],
  providers: [OpeningWeekDayService, OpeningWeekDayResolver],
  exports: [OpeningWeekDayService],
})
export class OpeningWeekDayModule {}
