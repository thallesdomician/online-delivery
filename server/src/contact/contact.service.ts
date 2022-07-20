import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ContactServiceBase } from "./base/contact.service.base";

@Injectable()
export class ContactService extends ContactServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
