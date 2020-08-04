import createAccount from './services/createAccount';
import getBallance from './services/getBallance';
import addBalance from './services/addBalance';
export function initialScreen(option: string) {
  switch (process.argv[2]) {
    case 'create': {
      createAccount(
        process.argv[3],
        process.argv[4],
        process.argv[5],
        Number(process.argv[6]),
      );
    }
    case 'balance': {
      getBallance(process.argv[3], process.argv[4]);
    }
    case 'deposit': {
      addBalance(process.argv[2], process.argv[3], Number(process.argv[4]));
    }
    default:
      return 'Error, option error invalidates';
  }
}
