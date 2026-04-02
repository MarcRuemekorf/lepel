export type FoodLog = {
  id: number;
  date: string;
  food_name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  amount: number;
};

export type NewFoodLog = Omit<FoodLog, 'id'>;