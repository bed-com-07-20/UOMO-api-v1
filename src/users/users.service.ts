/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';

@Injectable()
export class UsersService {
    createUser(user: User) {
        throw new Error('Method not implemented.');
    }

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async getUsers(user: User): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async getUser(_id: number): Promise<User[]> {
        return await this.usersRepository.find({
            select: ["fullName", "birthday", "isActive"],
            where: [{ "id": _id }]
        });
    }

    async updateUser(user: User) {
        this.usersRepository.save(user)
    }

    async deleteUser(user: User) {
        this.usersRepository.delete(user);
    }
}