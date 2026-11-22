import { Module } from '@nestjs/common';
import { BookingsController } from './bookings.controller.js';
import { BookingsService } from './bookings.service.js';
import { UsersModule } from '../users/users.module.js';

@Module({
    imports: [UsersModule],
    controllers: [BookingsController],
    providers: [BookingsService],
})
export class BookingsModule {}