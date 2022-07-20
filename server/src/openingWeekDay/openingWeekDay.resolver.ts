import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { OpeningWeekDayResolverBase } from "./base/openingWeekDay.resolver.base";
import { OpeningWeekDay } from "./base/OpeningWeekDay";
import { OpeningWeekDayService } from "./openingWeekDay.service";

@graphql.Resolver(() => OpeningWeekDay)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OpeningWeekDayResolver extends OpeningWeekDayResolverBase {
  constructor(
    protected readonly service: OpeningWeekDayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
