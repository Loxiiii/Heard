'use client';

import Image from 'next/image';
import { Poppins } from 'next/font/google';
import Topbar from '../../components/Topbar';
import Main from '../../components/Main';
// import supabase from '../helpers/DB/createClient';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400'],
	variable: '--font-poppins',
});

export default function Home() {
	return (
		<div className='w-full h-screen bg-black flex items-center justify-center'>
			<div
				id='full-wrapper'
				className={`${poppins.variable} font-sans w-11/12 h-full flex flex-col max-w-8xl bg-gray1`}
			>
				<div id='topbar-wrapper' className=''>
					<Topbar />
				</div>
				<div id='main-wrapper' className='w-full h-full mt-3'>
					<Main />
				</div>
			</div>
		</div>
	);
}
