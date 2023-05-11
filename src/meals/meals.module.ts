import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MealService } from './meals.service';
import { MealsController } from './meals.controller';
import { Meal } from './meal.entity/meal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Meal])],
  providers: [MealService],
  controllers: [MealsController],
})
export class MealsModule {}
