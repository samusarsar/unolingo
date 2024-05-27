import 'dotenv/config';
import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

import * as schema from '../db/schema';

const db = drizzle(sql, { schema });

const main = async () => {
	try {
		console.log('Resetting database');

		await db.delete(schema.courses);
		await db.delete(schema.userProgress);
		await db.delete(schema.units);
		await db.delete(schema.lessons);
		await db.delete(schema.challenges);
		await db.delete(schema.challengeOptions);
		await db.delete(schema.challengeProgress);
		await db.delete(schema.userSubscription);

		console.log('Resetting completed');
	} catch (error) {
		console.error(error);
		throw new Error('Failed to reset the database');
	}
};

main();
