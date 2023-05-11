import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './payment.entity/payment.entity';

@Injectable()
export class PaymentsService {
  createPayment: any;
  constructor(
    @InjectRepository(Payment) private paymentsRepository: Repository<Payment>,
  ) {}

  async getPayments(payment: Payment): Promise<Payment[]> {
    return await this.paymentsRepository.find();
  }

  async getPayment(_id: number): Promise<Payment[]> {
    return await this.paymentsRepository.find({
      select: ['fullName', 'birthday', 'isActive'],
      where: [{ id: _id }],
    });
  }

  async updatePayment(payment: Payment) {
    this.paymentsRepository.save(payment);
  }

  async deletePayment(payment: Payment) {
    this.paymentsRepository.delete(payment);
  }
}
