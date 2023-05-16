/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { user } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUsers(params.id);
    }

    @Post()
    create(@Body() user: user) {
        return this.service.createUser(user);
    }

    @Put()
    update(@Body() user: user) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}