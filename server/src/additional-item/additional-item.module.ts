import { Module } from '@nestjs/common';
import { AdditionalItemService } from './additional-item.service';
import { AdditionalItemResolver } from './additional-item.resolver';

@Module({
  providers: [AdditionalItemResolver, AdditionalItemService]
})
export class AdditionalItemModule {}
