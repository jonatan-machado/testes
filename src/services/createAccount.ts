import moment from 'moment';
import { writeToDatabase } from '../database/index';
interface Account {
  name: string;
  cpf: string;
  ammount: number;
}

function createAcoount(
  name: string,
  cpf: string,
  birthday: string,
  ammount: number,
) {
  if (name === '') {
    return 'Error, empty name';
  }
  if (cpf === '') {
    return 'Error, empty cpf';
  }
  if (cpf.length !== 11) {
    return 'Error, cpf must be 11 digits';
  }
  if (birthday === '') {
    return 'Error, empty birthday';
  }
  if (ammount <= 0) {
    return 'Minimum value not reached error';
  }
  if (moment().diff(moment(birthday, 'DD/MM/YYYY'), 'years') < 18) {
    return `Error, you're underage`;
  } else {
    const response: Account[] = [];

    const data: Account = {
      name,
      cpf,
      ammount,
    };

    response.push(data);
    console.log(response);
    try {
      writeToDatabase(response);
      return 'Account successfully created';
    } catch (error) {
      return 'error';
    }
  }
}

export default createAcoount;
