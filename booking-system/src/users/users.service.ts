import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  findAll(): string[] {
    return ["Mohand", "Ali", "Ahmed"];
  }

  findOne(id: number): {id: number, name: string} {
    return {id, name: "Mohand"};
  }
}
