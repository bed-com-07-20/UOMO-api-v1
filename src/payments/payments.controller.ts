import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  /*Param, Post,*/ Put,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { Payment } from './payment.entity/payment.entity';

@Controller('payments')
export class PaymentsController {
  constructor(private service: PaymentsService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getPayment(params.id);
  }

  @Post()
  create(@Body() payment: Payment) {
    return this.service.createPayment(payment);
  }

  @Put()
  update(@Body() payment: Payment) {
    return this.service.updatePayment(payment);
  }

  @Delete(':id')
  deletePayment(@Param() params) {
    return this.service.deletePayment(params.id);
  }
}
/*function Get(arg0: string): (target: PaymentsController, propertyKey: "get", descriptor: TypedPropertyDescriptor<(params: any) => any>) => void | TypedPropertyDescriptor<(params: any) => any> {
    throw new Error('Function not implemented.');
}

function Post(): (target: PaymentsController, propertyKey: "create", descriptor: TypedPropertyDescriptor<(payment: Payment) => any>) => void | TypedPropertyDescriptor<(payment: Payment) => any> {
    throw new Error('Function not implemented.');
}

function Put(): (target: PaymentsController, propertyKey: "update", descriptor: TypedPropertyDescriptor<(payment: Payment) => any>) => void | TypedPropertyDescriptor<(payment: Payment) => any> {
    throw new Error('Function not implemented.');
}

function Delete(arg0: string): (target: PaymentsController, propertyKey: "deletePayment", descriptor: TypedPropertyDescriptor<(params: any) => any>) => void | TypedPropertyDescriptor<...> {
    throw new Error('Function not implemented.'),
}

function Param(): (target: PaymentsController, propertyKey: "deletePayment", parameterIndex: 0) => void {
    throw new Error('Function not implemented.');
}



   */
