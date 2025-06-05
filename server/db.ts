import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { users, contactMessages } from '../shared/schema';
import type { InsertUser, InsertContactMessage } from '../shared/schema';

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);

export class DbStorage {
  async getUser(id: number) {
    const result = await db.select().from(users).where({ id }).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string) {
    const result = await db.select().from(users).where({ username }).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser) {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createContactMessage(insertMessage: InsertContactMessage) {
    const result = await db.insert(contactMessages).values(insertMessage).returning();
    return result[0];
  }

  async getContactMessages() {
    return await db.select().from(contactMessages).orderBy(contactMessages.createdAt);
  }
} 