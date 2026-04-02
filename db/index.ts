import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('plate.db');
let initialized = false;

export function ensureDbInitialized() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS food_logs (
      id        INTEGER PRIMARY KEY AUTOINCREMENT,
      date      TEXT NOT NULL,
      food_name TEXT NOT NULL,
      calories  REAL NOT NULL,
      protein   REAL NOT NULL,
      carbs     REAL NOT NULL,
      fat       REAL NOT NULL,
      amount    REAL NOT NULL
    );
  `);

  initialized = true;
}

export default db;