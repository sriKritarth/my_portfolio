import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { users, contactMessages } from '../shared/schema';
import type { InsertUser, InsertContactMessage } from '../shared/schema';

const isDevelopment = process.env.NODE_ENV === 'development';

export class DbStorage {
  private memoryDb: {
    users: any[];
    contactMessages: any[];
  } = {
    users: [],
    contactMessages: []
  };

  async getUser(id: number) {
    if (isDevelopment) {
      return this.memoryDb.users.find(u => u.id === id);
    }
    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle(sql);
    const result = await db.select().from(users).where({ id }).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string) {
    if (isDevelopment) {
      return this.memoryDb.users.find(u => u.username === username);
    }
    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle(sql);
    const result = await db.select().from(users).where({ username }).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser) {
    if (isDevelopment) {
      const newUser = { ...insertUser, id: this.memoryDb.users.length + 1 };
      this.memoryDb.users.push(newUser);
      return newUser;
    }
    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle(sql);
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createContactMessage(insertMessage: InsertContactMessage) {
    if (isDevelopment) {
      const newMessage = { 
        ...insertMessage, 
        id: this.memoryDb.contactMessages.length + 1,
        createdAt: new Date()
      };
      this.memoryDb.contactMessages.push(newMessage);
      return newMessage;
    }
    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle(sql);
    const result = await db.insert(contactMessages).values(insertMessage).returning();
    return result[0];
  }

  async getContactMessages() {
    if (isDevelopment) {
      return this.memoryDb.contactMessages.sort((a, b) => 
        b.createdAt.getTime() - a.createdAt.getTime()
      );
    }
    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle(sql);
    return await db.select().from(contactMessages).orderBy(contactMessages.createdAt);
  }
} 