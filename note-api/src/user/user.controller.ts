import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserDto } from './dto/updateUser-dto.js';

@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService) {}

    // Get User     // this function fetch all users
    @Get()
    getUsers(@Query('name') name : string ) : unknown {
        return this.userService.findUsers(name);
    }

    // Get user/:id    // this function get user by ID
    @Get('id')
    getUserById(@Param('id') id : number) : unknown {
        return this.userService.findUserById(id)
    }

    // Post Create User
    @Post()
    CreateUser(@Body() UserDto : UserDto) {
        return this.userService.createUser(UserDto)
    }

    // Put for edit user information
    @Put('id')
    updateUser(@Param('id') id : number,@Body() UserDto : UserDto) : unknown {
        return this.updateUser(id, UserDto)
    }

    // dete for deleting the user from DB
    @Delete('id')
    deleteUser(@Param('id') id : number) : unknown {
        return this.userService.deleteUser(id)
    }
} 
