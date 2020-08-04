import getAllAccounts from './getAllAccounts';
import { writeToDatabase } from '../database';
import moment from 'moment';

interface Account {
  name: string;
  cpf: string;
  amount: number;
}

const addBalance = (name: string, cpf: string, amount: number) => {
  const allAccounts = getAllAccounts();
  const accountIdx: number = allAccounts.findIndex(
    (item: Account) => item.name === name && item.cpf === cpf,
  );

  // Validacao de cliente
  if (accountIdx === -1) {
    console.log('Invalid customer information');
    return;
  }

  const transaction = {
    amount,
    date: moment().unix(),
    description: 'Depósito de dinheiro',
    completed: true,
  };
  allAccounts[accountIdx].transactions.push(transaction);
  allAccounts[accountIdx].balance += amount;

  writeToDatabase(allAccounts);

  console.log('Deposit sucesfull\n');
};

export default addBalance;
