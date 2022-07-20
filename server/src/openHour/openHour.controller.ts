import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OpenHourService } from "./openHour.service";
import { OpenHourControllerBase } from "./base/openHour.controller.base";

@swagger.ApiTags("openHours")
@common.Controller("openHours")
export class OpenHourController extends OpenHourControllerBase {
  constructor(
    protected readonly service: OpenHourService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
