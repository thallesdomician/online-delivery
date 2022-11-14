import { Module } from '@nestjs/common';
import { OpenTimeService } from './open-time.service';
import { OpenTimeResolver } from './open-time.resolver';

@Module({
  providers: [OpenTimeResolver, OpenTimeService]
})
export class OpenTimeModule {}
