import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { user } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([user]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql9.freesqldatabase.com',
      port: 3306,
      username: 'sql9624879',
      password: 'sQsMUyeSUv',
      database: 'sql9624879',
      entities: [user],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([user]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    // UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
