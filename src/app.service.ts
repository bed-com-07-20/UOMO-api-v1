/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user } from './user.entity';

@Injectable()
export class AppService {
  userRepository: any;
  
  constructor(
    @InjectRepository(user)
    private readonly appRepository: Repository<user>,
  ) {

  }

  async create(data: any): Promise<user>{
    return this.userRepository.save(data);
  }

  async findOne(condition: any): Promise<user>{
    return this.userRepository.findOne(condition);
  }
  
  async createUser(userData: user): Promise<user> {
    const user = this.userRepository.create(userData);
    return await this.userRepository.save(user);
  }
}