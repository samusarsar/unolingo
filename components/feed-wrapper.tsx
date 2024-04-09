import { BaseProps } from '@/common/types';

export const FeedWrapper = ({ children }: BaseProps) => {
	return (
		<div className='flex-1 relative top-0 pb-10'>
			{children}
		</div>
	);
};
