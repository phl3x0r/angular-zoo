import { MonkeyModule } from './monkey.module';

describe('MonkeyModule', () => {
  let monkeyModule: MonkeyModule;

  beforeEach(() => {
    monkeyModule = new MonkeyModule();
  });

  it('should create an instance', () => {
    expect(monkeyModule).toBeTruthy();
  });
});
