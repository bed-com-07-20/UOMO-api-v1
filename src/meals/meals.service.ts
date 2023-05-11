import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Meal } from './meal.entity/meal.entity';

@Injectable()
export class MealService {
  constructor(
    @InjectRepository(Meal) private mealRepository: Repository<Meal>,
  ) {}

  async getMeals(meal: Meal): Promise<Meal[]> {
    return await this.mealRepository.find();
  }

  async getMeal(_id: number): Promise<Meal[]> {
    return await this.mealRepository.find({
      select: ['fullName', 'birthday', 'isActive'],
      where: [{ id: _id }],
    });
  }

  async updateMeal(meal: Meal) {
    this.mealRepository.save(meal);
  }

  async deleteMeal(meal: Meal) {
    this.mealRepository.delete(meal);
  }
}
