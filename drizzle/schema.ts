import { integer, text, sqliteTable } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey().unique().notNull(),
  username: text('username').notNull(),
  password: text('password').notNull(),
});

export const pcsetups = sqliteTable('pcsetups', {
  id: integer('id').primaryKey().unique().notNull(),
  userId: integer('userId').references(() => users.id).notNull(),
  name: text('name').notNull(),
});
