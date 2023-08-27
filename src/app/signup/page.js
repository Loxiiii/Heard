import Image from 'next/image';
import guitarSvg from '../../media/image.svg';
import SignupForm from '../../components/signup/SignupForm.js';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// import supabase from '../helpers/DB/createClient';

let signup = () => {
	return (
		// <Layout>
		<div className='flex justify-center'>
			<div
				id='login-form'
				className='shadow-xl bg-white/60 mt-20 w-1/3 h-form rounded-l-lg flex flex-row justify-center border-solid border-2 border-r-0 border-t-zinc-800 border-l-zinc-800 border-b-zinc-800'
			>
				<div className='w-3/4 h-full flex flex-col'>
					<div className='font-extrabold text-white/60 mt-10 text-3xl'>
						Sign up
					</div>
					<SignupForm />
				</div>
			</div>
			<div
				id='login-form'
				className='bg-b2 mt-20 w-1/3 h-form rounded-r-lg flex flex-col items-center border-solid border-2 border-r-2 border-l-0 border-t-zinc-800 border-r-zinc-800 border-b-zinc-800'
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

export default signup;
