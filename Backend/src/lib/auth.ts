import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { prisma } from './DB.js';


export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "mysql", //  "postgresql", ...etc
    }),
    emailAndPassword: { 
        enabled: true, 
      }
   
});