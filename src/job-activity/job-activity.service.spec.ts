import { Test, TestingModule } from '@nestjs/testing';
import { JobActivityService } from './job-activity.service';

describe('JobActivityService', () => {
  let service: JobActivityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobActivityService],
    }).compile();

    service = module.get<JobActivityService>(JobActivityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
