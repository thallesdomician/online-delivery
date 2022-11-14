import { Test, TestingModule } from '@nestjs/testing';
import { AdditionalItemResolver } from './additional-item.resolver';
import { AdditionalItemService } from './additional-item.service';

describe('AdditionalItemResolver', () => {
  let resolver: AdditionalItemResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdditionalItemResolver, AdditionalItemService],
    }).compile();

    resolver = module.get<AdditionalItemResolver>(AdditionalItemResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
