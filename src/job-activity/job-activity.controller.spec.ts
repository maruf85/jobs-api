import { Test, TestingModule } from '@nestjs/testing';
import { JobActivityController } from './job-activity.controller';

describe('JobActivityController', () => {
  let controller: JobActivityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobActivityController],
    }).compile();

    controller = module.get<JobActivityController>(JobActivityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
