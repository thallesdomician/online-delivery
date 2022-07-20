import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { OpenHourResolverBase } from "./base/openHour.resolver.base";
import { OpenHour } from "./base/OpenHour";
import { OpenHourService } from "./openHour.service";

@graphql.Resolver(() => OpenHour)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OpenHourResolver extends OpenHourResolverBase {
  constructor(
    protected readonly service: OpenHourService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
