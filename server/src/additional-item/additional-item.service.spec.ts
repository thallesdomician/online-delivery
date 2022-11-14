import { Test, TestingModule } from '@nestjs/testing';
import { AdditionalItemService } from './additional-item.service';

describe('AdditionalItemService', () => {
  let service: AdditionalItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdditionalItemService],
    }).compile();

    service = module.get<AdditionalItemService>(AdditionalItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
