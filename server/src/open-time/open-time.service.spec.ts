import { Test, TestingModule } from '@nestjs/testing';
import { OpenTimeService } from './open-time.service';

describe('OpenTimeService', () => {
  let service: OpenTimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenTimeService],
    }).compile();

    service = module.get<OpenTimeService>(OpenTimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
