import { BaseProps } from '@/common/types';
import Footer from './_components/footer';
import Header from './_components/header';

const MarketingLayout = ({ children }: BaseProps) => {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			<main className='flex-1 flex flex-col items-center justify-center'>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default MarketingLayout;
