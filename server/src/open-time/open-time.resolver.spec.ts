import { Test, TestingModule } from '@nestjs/testing';
import { OpenTimeResolver } from './open-time.resolver';
import { OpenTimeService } from './open-time.service';

describe('OpenTimeResolver', () => {
  let resolver: OpenTimeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenTimeResolver, OpenTimeService],
    }).compile();

    resolver = module.get<OpenTimeResolver>(OpenTimeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
