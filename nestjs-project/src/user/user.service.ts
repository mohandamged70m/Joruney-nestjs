import { Injectable, NotFoundException } from '@nestjs/common';
import { UserLogger } from '../user.logger.js';
import { CreateUserDto } from './dto/create-user.dto.js';

interface User {
    id : number,
    name : string,
    email : string,
}

@Injectable()
export class UserService {
    constructor(private readonly userLogger: UserLogger) {}

    private users: User[] = [
        {id: 1, name: 'John Doe', email: 'john.doe@example.com'},
        {id: 2, name: 'Jane Doe', email: 'jane.doe@example.com'}
    ];

    findAllUsers(name: string = '') {
        this.userLogger.log(`Finding all users with name: ${name}`)
        return this.users.filter((user) => {
            return name ? user.name.toLowerCase().includes(name.toLowerCase()) : true;
        })
    }

    findUserById(id: number) {
        this.userLogger.log(`Finding user with id: ${id}`)
        const user = this.users.find((user) => user.id === id);

        if(!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        return user;
    }

    createUser(user: CreateUserDto) {
        this.userLogger.log(`Creating user with name: ${user.name}`)
        const newUser = {id: this.users.length + 1, ...user};
        this.users.push(newUser);
        return newUser;
    }

    updateUser(id: number, user: Partial<CreateUserDto>) {
        this.userLogger.log(`Updating user with id: ${id}`)
        const existingUserIndex = this.users.findIndex((user) => user.id === id);
        if (existingUserIndex === -1) {
            return null;
        }
        const updatedUser = {...this.users[existingUserIndex], ...user};
        this.users[existingUserIndex] = updatedUser;
        return updatedUser;
    }

    deleteUser(id: number) {
        this.userLogger.log(`Deleting user with id: ${id}`)
        const index = this.users.findIndex((user) => user.id === id);
        if (index === -1) return null;

        const [deleted] = this.users.splice(index, 1);
        return deleted;
    }
}
