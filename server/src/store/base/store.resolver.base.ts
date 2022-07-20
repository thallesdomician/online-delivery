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
import { Public } from "../../decorators/public.decorator";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CreateStoreArgs } from "./CreateStoreArgs";
import { UpdateStoreArgs } from "./UpdateStoreArgs";
import { DeleteStoreArgs } from "./DeleteStoreArgs";
import { StoreFindManyArgs } from "./StoreFindManyArgs";
import { StoreFindUniqueArgs } from "./StoreFindUniqueArgs";
import { Store } from "./Store";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { Address } from "../../address/base/Address";
import { StoreService } from "../store.service";

@graphql.Resolver(() => Store)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class StoreResolverBase {
  constructor(
    protected readonly service: StoreService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _storesMeta(
    @graphql.Args() args: StoreFindManyArgs
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

  @Public()
  @graphql.Query(() => [Store])
  async stores(@graphql.Args() args: StoreFindManyArgs): Promise<Store[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Store, { nullable: true })
  async store(
    @graphql.Args() args: StoreFindUniqueArgs
  ): Promise<Store | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Store)
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "create",
    possession: "any",
  })
  async createStore(@graphql.Args() args: CreateStoreArgs): Promise<Store> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        addresses: args.data.addresses
          ? {
              connect: args.data.addresses,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Store)
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "update",
    possession: "any",
  })
  async updateStore(
    @graphql.Args() args: UpdateStoreArgs
  ): Promise<Store | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          addresses: args.data.addresses
            ? {
                connect: args.data.addresses,
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

  @graphql.Mutation(() => Store)
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "delete",
    possession: "any",
  })
  async deleteStore(
    @graphql.Args() args: DeleteStoreArgs
  ): Promise<Store | null> {
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Product])
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async products(
    @graphql.Parent() parent: Store,
    @graphql.Args() args: ProductFindManyArgs
  ): Promise<Product[]> {
    const results = await this.service.findProducts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async user(
    @graphql.Parent() parent: Store,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUser(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Address, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "read",
    possession: "any",
  })
  async addresses(@graphql.Parent() parent: Store): Promise<Address | null> {
    const result = await this.service.getAddresses(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}