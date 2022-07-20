/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Public } from "../../decorators/public.decorator";
import { CreateOpenHourArgs } from "./CreateOpenHourArgs";
import { UpdateOpenHourArgs } from "./UpdateOpenHourArgs";
import { DeleteOpenHourArgs } from "./DeleteOpenHourArgs";
import { OpenHourFindManyArgs } from "./OpenHourFindManyArgs";
import { OpenHourFindUniqueArgs } from "./OpenHourFindUniqueArgs";
import { OpenHour } from "./OpenHour";
import { OpeningWeekDay } from "../../openingWeekDay/base/OpeningWeekDay";
import { OpenHourService } from "../openHour.service";

@graphql.Resolver(() => OpenHour)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OpenHourResolverBase {
  constructor(
    protected readonly service: OpenHourService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "OpenHour",
    action: "read",
    possession: "any",
  })
  async _openHoursMeta(
    @graphql.Args() args: OpenHourFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [OpenHour])
  @nestAccessControl.UseRoles({
    resource: "OpenHour",
    action: "read",
    possession: "any",
  })
  async openHours(
    @graphql.Args() args: OpenHourFindManyArgs
  ): Promise<OpenHour[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => OpenHour, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "OpenHour",
    action: "read",
    possession: "own",
  })
  async openHour(
    @graphql.Args() args: OpenHourFindUniqueArgs
  ): Promise<OpenHour | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => OpenHour)
  @nestAccessControl.UseRoles({
    resource: "OpenHour",
    action: "create",
    possession: "any",
  })
  async createOpenHour(
    @graphql.Args() args: CreateOpenHourArgs
  ): Promise<OpenHour> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        openingWeekDays: args.data.openingWeekDays
          ? {
              connect: args.data.openingWeekDays,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => OpenHour)
  @nestAccessControl.UseRoles({
    resource: "OpenHour",
    action: "update",
    possession: "any",
  })
  async updateOpenHour(
    @graphql.Args() args: UpdateOpenHourArgs
  ): Promise<OpenHour | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          openingWeekDays: args.data.openingWeekDays
            ? {
                connect: args.data.openingWeekDays,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => OpenHour)
  @nestAccessControl.UseRoles({
    resource: "OpenHour",
    action: "delete",
    possession: "any",
  })
  async deleteOpenHour(
    @graphql.Args() args: DeleteOpenHourArgs
  ): Promise<OpenHour | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @graphql.ResolveField(() => OpeningWeekDay, { nullable: true })
  async openingWeekDays(
    @graphql.Parent() parent: OpenHour
  ): Promise<OpeningWeekDay | null> {
    const result = await this.service.getOpeningWeekDays(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}