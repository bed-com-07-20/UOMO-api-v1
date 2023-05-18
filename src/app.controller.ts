
import { BadRequestException, Body, Controller, Delete, Headers, Post, Put, Get, Req, Res, Param, UnauthorizedException } from '@nestjs/common';
//import { UserService } from './app.service';
//import {Body, Controller, Post} from '@nestjs/common';
import {AppService} from './app.service';
import * as bcrypt from 'bcrypt';
import { ApiBadRequestResponse } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import {Response, Request} from 'express';
import { get, request } from 'http';
import path from 'path';
import { users } from './app.entity';

//import {Path} from 'path';

@Controller('api')
export class AppController {
  [x: string]: any;
  /*getHello(): any {
    throw new Error('Method not implemented.');
  }*/
  
  constructor(
    private readonly appService: AppService,
    private jwtService: JwtService
    ) {

  }

  @Post('register')
 async register(
  @Body('name') name: string,
  @Body('email') email: string,
  @Body('password') password: string
  ){
     const hashedPassword = await bcrypt.hash(password,  12);

     const user = await this.appService.create({
      name,
      email,
      password: hashedPassword
     });
     delete user.password;

     return user;
 }

 @Post('id/login')
 async login(
  @Body('email') email: string,
  @Body('password') password: string,
  @Headers() headers: Record<string, string>,
  @Res({passthrough: true}) response: Response,
 ) {
       const user = await this.appService.findOne({email});

       if (!user) {
        throw new BadRequestException('invalid credentials');
       }

       if (!await bcrypt.compare(password, user.password)) {
        throw new BadRequestException('invalid credentials');
       }
       
       const jwt = await this.jwtService.signAsync({id: user.id});

       response.cookie('jwt', jwt, {httpOnly: true});

       return {
        message: 'success'
       };

       //return user;
 }
      @Get(':id/user/photo')

     async user(@Req() request: Request){
      try{
      const cookie = request.cookies['jwt'];

      const data = await this.jwtService.verifyAsync(cookie);

      if (!data) {
        throw new UnauthorizedException();
      }

      const user = await this.appService.findOne({id: data['id']});

      const {password, ...result} = user;

      return result;
      } catch(e) {
        throw new UnauthorizedException();
      }
     }

     @Delete(':id/photo')
     deleteUser(@Param() params) {
         return this.service.deleteUser(params.id);
     }

     @Get(':id')
    get(@Param() params) {
        return this.service.getUsers(params.id);
    }

    @Post(':id/photo')
    create(@Body() user: users) {
        return this.service.createUser(user);
    }

    @Put()
    update(@Body() user: users) {
        return this.service.updateUser(user);
    }
     
     @Post(':id/logout')
async logout(@Res({ passthrough: true }) response: Response) {
  response.clearCookie('jwt');

  return {
    message: 'success',
  };
}

}


