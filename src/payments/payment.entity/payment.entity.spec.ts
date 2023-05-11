import { Payment } from './payment.entity';

describe('PaymentEntity', () => {
  it('should be defined', () => {
    expect(new Payment()).toBeDefined();
  });
});
