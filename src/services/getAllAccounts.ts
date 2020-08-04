import { readDatabase } from '../database';

interface Account {
  name: string;
  cpf: string;
  birthday: string;
  balance: number;
}

const getAllAccounts = () => {
  const accounts = readDatabase().map((item: Account) => {
    return {
      name: item.name,
      cpf: item.cpf,
      birthday: item.birthday,
      balance: item.balance,
    };
  });
  return accounts;
};

export default getAllAccounts;
