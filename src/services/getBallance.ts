import getAllAccounts from './getAllAccounts';

interface Account {
  name: string;
  cpf: string;
  birthday: string;
  balance: number;
}

function getBallance(name: string, cpf: string) {
  if (cpf === '') {
    return 'empty CPF error';
  }
  if (cpf.length < 11) {
    return 'cpf error must be 11 digits';
  }
  if (name === '') {
    return 'empty name error';
  }
  const accounts: Account[] = getAllAccounts();
  for (const account of accounts) {
    if (account.cpf === cpf && account.name === name) {
      return account.balance;
    }
  }
}
export default getBallance;
