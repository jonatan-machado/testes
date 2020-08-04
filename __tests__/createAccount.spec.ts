import createAccount from '../src/services/createAccount';
import * as moment from 'moment';

describe('Create account function ', () => {
  it('should show error for lack of name', () => {
    const response = createAccount('', '99999999999', '02/12/1992', 90);
    expect(response).toBe('Error, empty name');
  });

  it('should show error for lack of CPF', () => {
    const response = createAccount('Jonatan', '', '02/12/1992', 90);
    expect(response).toBe('Error, empty cpf');
  });

  it('should show error for lack of CPF', () => {
    const name = 'jonatan';
    const cpf = '90';
    const birthday = '02/12/1992';
    const ammount = 90;
    const response = createAccount(name, cpf, birthday, ammount);
    expect(cpf).toHaveLength(2);
    expect(response).toBe('Error, cpf must be 11 digits');
  });

  it('should show error for lack of birthday', () => {
    const data = {
      name: 'jonatan',
      cpf: '00000000000',
      birthday: '',
      ammount: 900,
    };
    const response = createAccount(
      data.name,
      data.cpf,
      data.birthday,
      data.ammount,
    );
    expect(response).toBe(`Error, empty birthday`);
  });

  it('should show error at value 0', () => {
    const response = createAccount('jonatan', '00000000000', '02/12/1992', 0);
    expect(response).toBe('Minimum value not reached error');
  });

  it('should show error to the negative value', () => {
    const response = createAccount('jonatan', '00000000000', '02/12/1992', -1);
    expect(response).toBe('Minimum value not reached error');
  });

  it('Should show an error if the client is under 18 years old', () => {
    const data = {
      name: 'jonatan',
      cpf: '00000000000',
      birthday: '02/12/2010',
      ammount: 900,
    };
    const response = createAccount(
      data.name,
      data.cpf,
      data.birthday,
      data.ammount,
    );
    expect(response).toBe(`Error, you're underage`);
  });

  it('should create the bank account', () => {
    const data = {
      name: 'jonatan',
      cpf: '00000000000',
      birthday: '02/12/1992',
      ammount: 90,
    };
    const response = createAccount(
      data.name,
      data.cpf,
      data.birthday,
      data.ammount,
    );
    expect(response).toBe('Account successfully created');
  });
});
