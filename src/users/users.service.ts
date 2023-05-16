/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//import { user } from './user.service';
//import { user } from './users.entity';
import { user } from 'src/user.entity';

@Injectable()
export class UsersService {
    createUser(user: user) {
        throw new Error('Method not implemented.');
    }

    constructor(@InjectRepository(user) private usersRepository: Repository<user>) { }

    async getUsers(user: user): Promise<user[]> {
        return await this.usersRepository.find();
    }

    /*async getUser(_id: number): Promise<user[]> {
        return await this.usersRepository.find({
            select: ["fullName", "birthday", "isActive"],
            where: [{ "id": _id }]
        });
    }
    */

    async updateUser(user: user) {
        this.usersRepository.save(user)
    }

    async deleteUser(user: user) {
        this.usersRepository.delete(user);
    }
}
export { user };

