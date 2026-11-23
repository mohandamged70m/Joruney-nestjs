import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { UserService } from './user.service.js';
import { RoleGuard } from '../guard/role.guard.js';

// @Get('all')  // Get /user/all
// @Get(':id')  // Get /user/:id
// @Post()      // Post /user
// @Put(':id')   // Put /user/:id
// @Delete(':id') // Delete /user/:id
@Controller('user')

export class UserController {
    constructor(private readonly userService: UserService) {}
    // Get /user
    @Get()
    getUsers(@Query('name') name: string) : unknown {
        return this.userService.findAllUsers(name);
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) : unknown {
        return this.userService.findUserById(id);
    }

    @Post()
    createUser(@Body() CreateUserDto: CreateUserDto) {
        return this.userService.createUser(CreateUserDto);
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() UpdateUserDto: UpdateUserDto) {
        return this.userService.updateUser(id, UpdateUserDto);
    }

    @Delete(':id')
    @UseGuards(RoleGuard)
    deleteUser(@Param('id') id: number) : unknown {
        return this.userService.deleteUser(id);
    }
}
