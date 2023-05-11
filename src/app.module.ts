/* eslint-disable prettier/prettier */
/*import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}*/


import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserController } from './app.controller';
import { UserService } from './app.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { User } from './users/user.entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: '',
      password: '',
      database: 'uomo',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}