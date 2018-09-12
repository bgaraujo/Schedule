import { AddScheduleModule } from './add-schedule.module';

describe('AddScheduleModule', () => {
  let addScheduleModule: AddScheduleModule;

  beforeEach(() => {
    addScheduleModule = new AddScheduleModule();
  });

  it('should create an instance', () => {
    expect(addScheduleModule).toBeTruthy();
  });
});
