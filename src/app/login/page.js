'use client';

import Layout from '../../components/layout';
import Image from 'next/image';
import Link from 'next/link';
import guitarSvg from '../../media/image.svg';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
// import supabase from '../helpers/DB/createClient';

let login = () => {
	// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
	// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
	const supabase = createClientComponentClient();

	const handleSignIn = async () => {
		await supabase.auth.signInWithPassword({
			email: email,
			password: password,
			options: {
				emailRedirectTo: 'http://localhost:3000/auth/callback',
			},
		});
		console.log('after clicking login');
	};

	let [email, setEmail] = useState('');
	let [password, setPassword] = useState('');

	// const router = useRouter();

	let handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	let handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	// let handleSubmit = async () => {
	// 	console.log({
	// 		email,
	// 		password,
	// 	});
	// 	const { data, error } = await supabase.auth.signInWithPassword({
	// 		email: email,
	// 		password: password,
	// 	});

	// 	if (error) {
	// 		console.log(error);
	// 	} else {
	// 		console.log('signed in succesfully');
	// 		supabase.auth.getUser().then((user) => {
	// 			console.log(user.data);
	// 			router.push('/feed');
	// 		});
	// 	}
	// };

	return (
		<Layout>
			<div className='flex justify-center'>
				<div
					id='login-form'
					className='bg-b2 mt-20 w-1/3 h-form rounded-l-lg flex flex-col items-center border-solid border-2 border-r-0 border-t-zinc-800 border-l-zinc-800 border-b-zinc-800'
				>
					<div className='w-3/4 h-full flex flex-col'>
						<div className='font-extrabold text-white/60 mt-10 text-3xl'>
							Sign in
						</div>
						<form className='mt-5 h-fit border-b-2 pb-10 border-white/60'>
							<label
								className='block uppercase tracking-wide text-white/60 text-xs font-bold mb-2'
								for='grid-first-name'
							>
								Email
							</label>
							<input
								className='shadow-lg appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-last-name'
								type='text'
								placeholder='Doe'
								onChange={(e) => {
									handleEmailChange(e);
								}}
							></input>
							<label
								className='mt-5 block uppercase tracking-wide text-white/60 text-xs font-bold mb-2'
								for='grid-first-name'
							>
								Password
							</label>
							<input
								className='shadow-lg appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-last-name'
								type='password'
								placeholder='*********'
								onChange={(e) => {
									handlePasswordChange(e);
								}}
							></input>
							<p className='text-white/60 text-xs mt-3 cursor-pointer hover:text-white/80'>
								Forgot your password?
							</p>
							<div className='flex flex-row w-full justify-between'>
								<label className='mt-7 md:w-2/3 block text-white/60 font-bold'>
									<input className='mr-2 leading-tight' type='checkbox'></input>
									<span className='text-sm'>Keep me signed in</span>
								</label>
								<div className='mt-5 w-2/3'>
									<button
										className='shadow-lg w-full bg-blouse hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
										type='button'
										onClick={() => {
											handleSignIn();
										}}
									>
										Log in
									</button>
								</div>
							</div>
						</form>
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
		</Layout>
	);
};

export default login;
