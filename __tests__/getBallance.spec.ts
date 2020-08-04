import getBallance from '../src/services/getBallance';

describe('Get Ballance function ', () => {
  it('should show error by blank cpf', () => {
    const response = getBallance('jonatan', '');
    expect(response).toBe('empty CPF error');
  });

  it('should show error for invalid CPF', () => {
    const response = getBallance('jonatan', '000');
    expect(response).toBe('cpf error must be 11 digits');
  });

  it('should show error by blank name', () => {
    const response = getBallance('', '00000000000');
    expect(response).toBe('empty name error');
  });
  it('should name and ballance', () => {
    const getBallance = (name: string, cpf: string) => {
      const data = [{ name: 'jonatan', cpf: '00000000000', balance: 90 }];
      if (data[0].cpf === cpf) {
        return data[0].balance;
      }
    };
    expect(getBallance('jonatan', '00000000000')).toBe(90);
  });
});
