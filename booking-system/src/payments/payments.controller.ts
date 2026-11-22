import { Controller, Get } from '@nestjs/common';
import { PaymentsService } from './payments.service.js';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {} 

    @Get()
    getPayment(): string {
        return this.paymentsService.Pay();
    }
}