import { Controller, Get } from '@nestjs/common';
import { BookingsService } from './bookings.service.js';

@Controller('bookings')
export class BookingsController {
    constructor(private readonly bookingsService: BookingsService) {}

    @Get()
    getBooking(): string {
        return this.bookingsService.getBooking();
    }
}