'use client';
import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function LoginForm() {
	let [email, setEmail] = useState('');
	let [password, setPassword] = useState('');

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

	let handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	let handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	return (
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
		// <div>Hello</div>
	);
}
