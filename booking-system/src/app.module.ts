import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PaymentsModule } from './payments/payments.module.js';
import { BookingsModule } from './bookings/bookings.module.js';
import { UsersModule } from './users/users.module.js';

@Module({
  imports: [UsersModule, BookingsModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
