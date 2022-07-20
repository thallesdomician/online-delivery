/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { OpenHourService } from "../openHour.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OpenHourCreateInput } from "./OpenHourCreateInput";
import { OpenHourWhereInput } from "./OpenHourWhereInput";
import { OpenHourWhereUniqueInput } from "./OpenHourWhereUniqueInput";
import { OpenHourFindManyArgs } from "./OpenHourFindManyArgs";
import { OpenHourUpdateInput } from "./OpenHourUpdateInput";
import { OpenHour } from "./OpenHour";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OpenHourControllerBase {
  constructor(
    protected readonly service: OpenHourService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "OpenHour",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OpenHour })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: OpenHourCreateInput): Promise<OpenHour> {
    return await this.service.create({
      data: {
        ...data,

        openingWeekDays: data.openingWeekDays
          ? {
              connect: data.openingWeekDays,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        openingWeekDays: {
          select: {
            id: true,
          },
        },

        startTime: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "OpenHour",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [OpenHour] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(OpenHourFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<OpenHour[]> {
    const args = plainToClass(OpenHourFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,

        openingWeekDays: {
          select: {
            id: true,
          },
        },

        startTime: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "OpenHour",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OpenHour })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: OpenHourWhereUniqueInput
  ): Promise<OpenHour | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,

        openingWeekDays: {
          select: {
            id: true,
          },
        },

        startTime: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "OpenHour",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: OpenHour })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: OpenHourWhereUniqueInput,
    @common.Body() data: OpenHourUpdateInput
  ): Promise<OpenHour | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          openingWeekDays: data.openingWeekDays
            ? {
                connect: data.openingWeekDays,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          openingWeekDays: {
            select: {
              id: true,
            },
          },

          startTime: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "OpenHour",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: OpenHour })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: OpenHourWhereUniqueInput
  ): Promise<OpenHour | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,

          openingWeekDays: {
            select: {
              id: true,
            },
          },

          startTime: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}