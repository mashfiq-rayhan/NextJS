import db from './db';

export function createUser(email, password) {
  const result = db
    .prepare('INSERT INTO users (email, password) VALUES (?, ?)')
    .run(email, password);
  console.log('-------------',result);
  return result.lastInsertRowid;
}
