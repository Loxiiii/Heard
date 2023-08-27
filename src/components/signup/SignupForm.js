'use client';

import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState, useEffect } from 'react';
import router from 'next/router';
import { redirect } from 'next/navigation';

export default function SignupForm() {
	const supabase = createClientComponentClient();
	let [name, setName] = useState('');
	let [email, setEmail] = useState('');
	let [password, setPassword] = useState('');
	let [confirm, setConfirm] = useState('');

	const handleSignUp = async () => {
		await supabase.auth.signUp({
			email: email,
			password: password,
			options: {
				// emailRedirectTo: `${location.origin}/auth/callback`,
				emailRedirectTo: `${location.origin}/feed`,
			},
		});

		redirect('/checkEmail');
	};

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
	return (
		<form className='mt-5 h-fit  border-white/60' autocomplete='off'>
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
				autocomplete='off'
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
				autocomplete='off'
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
				autocomplete='off'
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
				autocomplete='off'
				onChange={(e) => {
					handleConfirmChange(e);
				}}
			></input>
			<div className='w-full flex flex-row justify-center'>
				<button
					className='shadow-lg mt-10 w-3/4 self-center bg-blouse hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
					type='button'
					onClick={() => {
						handleSignUp();
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
	);
}
