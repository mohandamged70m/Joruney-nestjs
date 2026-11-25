import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './dto/updateUser-dto.js';

interface User {
    id : number,
    name : string,
    email : string,
    number : string
}

@Injectable()
export class UserService {
    private users : User[] = [
        {id : 1, name: 'Mohand Amged', email: 'mohandamged@mo.com', number: '01280107710'}
    ]

    findUsers(name : string) {
        return this.users.filter((user) => {
            return name ? user.name.toLowerCase().includes(name.toLowerCase()) : true ;
        })
    }

    findUserById(id : number) {
        const user = this.users.find((user) => user.id === id);

        if(!user) {
            throw new NotFoundException(`User with id ${id} not found`)
        }

        return user
    }

    createUser(user: UserDto) {
        const newUser = {id : this.users.length + 1, ...user}
        this.users.push(newUser)
        return newUser
    }

    updateUser(id : number , user : UserDto) {
        const existingUser = this.users.findIndex((user) => user.id === id)
        if (!existingUser) return null;

        const updateUser = {...this.users[existingUser], ...user}
        this.users[existingUser] = updateUser
        return updateUser
    }

    deleteUser(id : number) {
        const index = this.users.findIndex((user) => user.id === id)
        if (!index) {
            throw new NotFoundException(`this user doesnt Exists by that id :${id}`)
        }

        const [deleted] = this.users.slice(index, 1)
        return deleted
    }
}
