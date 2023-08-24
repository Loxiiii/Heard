'use client';

import Layout from '../../components/layout';
import Image from 'next/image';
import Link from 'next/link';
import guitarSvg from '../../media/image.svg';
import { useState, useEffect } from 'react';
import router from 'next/router';
// import supabase from '../helpers/DB/createClient';

let signup = () => {
	let [name, setName] = useState('');
	let [email, setEmail] = useState('');
	let [password, setPassword] = useState('');
	let [confirm, setConfirm] = useState('');

	let handleNameChange = (e) => {
		setName(e.target.value);
	};

	let handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	let handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	let handleConfirmChange = (e) => {
		setConfirm(e.target.value);
	};

	let handleSubmit = async () => {
		console.log({
			name,
			email,
			password,
			confirm,
		});
		const { data, error } = await supabase.auth.signUp({
			email: email,
			password: password,
			options: {
				data: {
					name: name,
				},
			},
		});

		// supabase.auth.getUser().then(async (user) => {
		// 	console.log('this is the user: ', user);

		// 	const { data, error } = await supabase
		// 		.from('profiles')
		// 		.insert([
		// 			{
		// 				first_name: name,
		// 				last_name: 'otherValue',
		// 				user_id: user,
		// 			},
		// 		])
		// 		.select();
		// });
		if (error) {
			console.log(error);
			// Object {
			//  "message": "Unable to validate email address: invalid format",
			//  "status": 422,
			// }
			return;
		} else {
			console.log(user);
			router.push('/feedv2');
		}
	};

	return (
		<Layout>
			<div className='flex justify-center'>
				<div
					id='login-form'
					className='shadow-xl bg-white/60 mt-20 w-1/3 h-form rounded-l-lg flex flex-row justify-center border-solid border-2 border-r-0 border-t-zinc-800 border-l-zinc-800 border-b-zinc-800'
				>
					<div className='w-3/4 h-full flex flex-col'>
						<div className='font-extrabold text-white/60 mt-10 text-3xl'>
							Sign up
						</div>
						<form className='mt-5 h-fit  border-white/60'>
							<label
								className='block uppercase tracking-wide text-white/60 text-xs font-bold mb-2'
								for='grid-first-name'
							>
								Full name
							</label>
							<input
								className='shadow-lg z-30 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-last-name'
								type='text'
								placeholder='Doe'
								onChange={(e) => {
									handleNameChange(e);
								}}
							></input>
							<label
								className='mt-5 block uppercase tracking-wide text-white/60 text-xs font-bold mb-2'
								for='grid-first-name'
							>
								Email
							</label>
							<input
								className='shadow-lg z-30 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
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
								className='shadow-lg z-30 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-last-name'
								type='password'
								placeholder='*********'
								onChange={(e) => {
									handlePasswordChange(e);
								}}
							></input>
							<label
								className='mt-5 block uppercase tracking-wide text-white/60 text-xs font-bold mb-2'
								for='grid-first-name'
							>
								Confirm password
							</label>
							<input
								className='shadow-lg appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-last-name'
								type='password'
								placeholder='*********'
								onChange={(e) => {
									handleConfirmChange(e);
								}}
							></input>
							<div className='w-full flex flex-row justify-center'>
								<button
									className='shadow-lg mt-10 w-3/4 self-center bg-blouse hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
									type='button'
									onClick={() => {
										handleSubmit();
									}}
								>
									Sign up
								</button>
							</div>
							<div className='flex flex-row justify-center'>
								<p className='self-center mt-7 font-bold text-sm text-white/60'>
									Already have an account?
								</p>
								<p className='self-center mt-7 ml-2 font-bold text-sm text-blouse underline cursor-pointer'>
									<Link href='/login'>Log in</Link>
								</p>
							</div>
						</form>
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
		</Layout>
	);
};

export default signup;
