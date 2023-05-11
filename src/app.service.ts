/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users/user.entity/user.entity';

@Injectable()
export class UserService {
  [x: string]: any;
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userData: User): Promise<User> {
    const user = this.userRepository.create(userData);
    return await this.userRepository.save(user);
  }
}