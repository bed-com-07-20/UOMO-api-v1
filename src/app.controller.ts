/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './app.service';
import { User } from './users/user.entity/user.entity';

@Controller('users')
export class UserController {
  [x: string]: any;
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userData: User): Promise<User> {
    return this.userService.createUser(userData);
  }
}