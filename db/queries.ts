import db, { ensureDbInitialized } from './index';
import { FoodLog, NewFoodLog } from './schema';

export function getLogsByDate(date: string): FoodLog[] {
  ensureDbInitialized();
  return db.getAllSync<FoodLog>(
    `SELECT * FROM food_logs WHERE date = ? ORDER BY id DESC`,
    [date]
  );
}

export function insertFoodLog(log: NewFoodLog): void {
  db.runSync(
    `INSERT INTO food_logs (date, food_name, calories, protein, carbs, fat, amount)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [log.date, log.food_name, log.calories, log.protein, log.carbs, log.fat, log.amount]
  );
}

export function deleteFoodLog(id: number): void {
  db.runSync(`DELETE FROM food_logs WHERE id = ?`, [id]);
}