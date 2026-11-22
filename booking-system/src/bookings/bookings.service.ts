import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';

@Injectable()
export class BookingsService {
    constructor(private readonly usersService: UsersService) {}
    
    createBooking(userId: number) {
        const user = this.usersService.findOne(userId);

        return {
            message: `Booking created successfully for user: ${user.name}`,
        };
    }
}