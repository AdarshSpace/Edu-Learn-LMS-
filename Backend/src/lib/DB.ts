import "dotenv/config";
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaMariaDb } from "@prisma/adapter-mariadb";


const adapter = new PrismaMariaDb({
    host: 'localhost',
    user: "root",
    password: process.env.PASSWORD_SECRET as string,
    database: "Courses",
  });

export const prisma = new PrismaClient({ adapter });
