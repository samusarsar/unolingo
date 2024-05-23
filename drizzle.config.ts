import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
	schema: './db/schema.ts',
	out: './drizzle',
	// driver: 'pg',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.POSTGRES_URL!,
	},
} satisfies Config;
