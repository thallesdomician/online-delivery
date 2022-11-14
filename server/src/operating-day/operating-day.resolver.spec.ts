import { Test, TestingModule } from '@nestjs/testing';
import { OperatingDayResolver } from './operating-day.resolver';
import { OperatingDayService } from './operating-day.service';

describe('OperatingDayResolver', () => {
  let resolver: OperatingDayResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperatingDayResolver, OperatingDayService],
    }).compile();

    resolver = module.get<OperatingDayResolver>(OperatingDayResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
