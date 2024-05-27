import { auth } from '@clerk/nextjs';

const whitelistedIds = ['user_2eMwQjcIBr5M954lXRESUX5uvv7'];

export const isAdmin = () => {
	const { userId } = auth();

	if (!userId) {
		return false;
	}

	return whitelistedIds.includes(userId);
};
