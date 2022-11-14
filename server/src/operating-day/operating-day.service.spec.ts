import { Test, TestingModule } from '@nestjs/testing';
import { OperatingDayService } from './operating-day.service';

describe('OperatingDayService', () => {
  let service: OperatingDayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperatingDayService],
    }).compile();

    service = module.get<OperatingDayService>(OperatingDayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
