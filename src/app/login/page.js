// import Layout from '../../components/layout';
import Image from 'next/image';
import Link from 'next/link';
import guitarSvg from '../../media/image.svg';
import LoginForm from '../../components/login/LoginForm.js';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
// import supabase from '../helpers/DB/createClient';

let login = () => {
	// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
	// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

	return (
		// <Layout>
		<div className='flex justify-center'>
			<div
				id='login-form'
				className='bg-b2 mt-20 w-1/3 h-form rounded-l-lg flex flex-col items-center border-solid border-2 border-r-0 border-t-zinc-800 border-l-zinc-800 border-b-zinc-800'
			>
				<div className='w-3/4 h-full flex flex-col'>
					<div className='font-extrabold text-white/60 mt-10 text-3xl'>
						Sign in
					</div>
					<LoginForm />
					<p className='self-center mt-7 font-bold text-sm text-white/60'>
						Don't have an account?
					</p>
					<button
						className='shadow-lg w-full mt-7 bg-blouse hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
						type='button'
					>
						<Link href='/signup'>Sign up for Heard</Link>
					</button>
				</div>
			</div>
			<div
				id='login-form'
				className='bg-white/60 mt-20 w-1/3 h-form rounded-r-lg flex flex-row -z-10 border-solid border-2 border-l-0 border-t-zinc-800 border-r-zinc-800 border-b-zinc-800'
			>
				<div className='w-full  h-full relative'>
					<Image
						className=''
						src={guitarSvg}
						layout='fill'
						objectFit='contain'
					></Image>
				</div>
			</div>
		</div>
		// </Layout>
	);
};

export default login;
