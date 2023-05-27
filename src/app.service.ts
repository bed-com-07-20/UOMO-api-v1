import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(user)
    private appRepository: Repository<user>,
  ) {}

  async create(data: {
    name: string;
    email: string;
    password: string;
  }): Promise<user> {
    const user = this.appRepository.create({
      email: data.email,
      name: data.name,
      password: data.password,
    });
    return await this.appRepository.save(user);
  }

  async findOne(email: string): Promise<any> {
    return this.appRepository.findOne({ where: { email } });
  }

  async createUser(userData: user): Promise<user> {
    const user = this.appRepository.create(userData);
    return await this.appRepository.save(user);
  }
}
