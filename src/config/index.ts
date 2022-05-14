import { config } from 'dotenv';

if (process.env.NODE_ENV) {
  config({ path: `.env.${process.env.NODE_ENV}.local` });
}

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN, DATABASE_URL } =
  process.env;
