import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(process.cwd(), '.env.local') });

console.log('DATABASE_URL:', process.env.DATABASE_URL); 