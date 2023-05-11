import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { MealService } from './meals.service';
import { Meal } from './meal.entity/meal.entity';

@Controller('Meals')
export class MealsController {
  constructor(private service: MealService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getMeal(params.id);
  }

  //@Post()
  //create(@Body() Meal: Meal) {
  //  return this.service.createMeal(Meal);
  //}

  @Put()
  update(@Body() Meal: Meal) {
    return this.service.updateMeal(Meal);
  }

  @Delete(':id')
  deleteMeal(@Param() params) {
    return this.service.deleteMeal(params.id);
  }
}
