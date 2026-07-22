import dns from "node:dns";
dns.setServers(['8.8.8.8','8.8.4.4']);
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);

const db = client.db('qubaniHat');

export const auth = betterAuth({
  trustedOrigins: ['http://localhost:3000', process.env.BETTER_AUTH_URL].filter(Boolean),
  database: mongodbAdapter(db, {client}),
  emailAndPassword: { 
    enabled: true, 
  },
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },
});