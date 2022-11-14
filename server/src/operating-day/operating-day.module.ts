import { Module } from '@nestjs/common';
import { OperatingDayService } from './operating-day.service';
import { OperatingDayResolver } from './operating-day.resolver';

@Module({
  providers: [OperatingDayResolver, OperatingDayService]
})
export class OperatingDayModule {}
