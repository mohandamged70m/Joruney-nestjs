import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  Pay(): string {
    return 'this is the payment service';
  }
}
