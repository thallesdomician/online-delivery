import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OpeningWeekDayService } from "./openingWeekDay.service";
import { OpeningWeekDayControllerBase } from "./base/openingWeekDay.controller.base";

@swagger.ApiTags("openingWeekDays")
@common.Controller("openingWeekDays")
export class OpeningWeekDayController extends OpeningWeekDayControllerBase {
  constructor(
    protected readonly service: OpeningWeekDayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
