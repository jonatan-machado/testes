import { initialScreen } from '../src/';

describe('Initial bank call function', () => {
  it('should show error when choosing invalid option', () => {
    const response = initialScreen('criar');
    expect(response).toBe('Error, option error invalidates');
  });
});
