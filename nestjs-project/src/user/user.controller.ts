import { Controller, Get, HttpException, Query } from '@nestjs/common';

// @Get('all')  // Get /user/all
// @Get(':id')  // Get /user/:id
// @Post()      // Post /user
// @Put(':id')   // Put /user/:id
// @Delete(':id') // Delete /user/:id

@Controller('user')
export class UserController {
    // Get /user
    @Get()
    getUsers(@Query('name') name: string) {
        const users = [
            {id:  1, name: 'John Doe'},
            {id:  2, name: 'Jane Doe'}
        ];

        if (name) {
            return users.filter((user) => 
                user.name.toLowerCase().includes(name.toLowerCase()),
            );
        }
        
        return users;
    }
}
