'use client';

import Waves from '../media/dark-g40b103a13_1280.jpg';
import ProfilePic from '../media/close-up-portrait-young-man-isolated-black-studio-background.jpg';
import Image from 'next/image';
import { BsFillImageFill } from 'react-icons/bs';
import { PiGifFill } from 'react-icons/pi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { BiListUl } from 'react-icons/bi';
// import supabase from '../helpers/DB/createClient';
import axios from 'axios';
// import { getAllPosts } from '../helpers/DB/posts';
import { useState } from 'react';

export default function Main() {
	let [newPost, setNewPost] = useState('');

	const handleNewPostChange = (e) => {
		setNewPost(e.target.value);
	};

	const createNewPost = async () => {
		let {
			data: {
				user: { id },
			},
		} = await supabase.auth.getUser();

		const { data, error } = await supabase
			.from('posts')
			.insert([{ user_id: id, content: newPost }])
			.select();
	};

	return (
		<div className='h-full w-full border-white'>
			<div className='text-txtgray w-full h-full flex flex-row'>
				<div
					id='main-left'
					className='h-full w-1/4  border-white flex flex-col items-center'
				>
					<div
						id='profile-section'
						className='w-11/12 h-1/2 bg-gray2 rounded-xl border-white flex flex-col'
					>
						<div className='w-full h-1/2 flex flex-col'>
							<div className='w-full h-3/4  border-white relative overflow-hidden'>
								<Image
									src={Waves}
									fill={true}
									className='rounded-t-xl'
									alt={''}
								/>
							</div>
							<div className='w-full h-1/4  border-white flex flex-row justify-center items-center'>
								<div className='w-1/3 flex flex-col justify-center items-center'>
									<div>1247</div>
									<div>followers</div>
								</div>
								<div className='w-1/3 flex justify-center items-center'>
									<div className='w-28 h-28 rounded-3xl  border-white mb-20 relative overflow-hidden'>
										<Image
											src={ProfilePic}
											fill={true}
											className='rounded-3xl border-4 border-borderdark'
											alt={''}
										/>
									</div>
								</div>
								<div className='w-1/3 flex flex-col justify-center items-center'>
									<div>684</div>
									<div>following</div>
								</div>
							</div>
						</div>
						<div className='w-full h-1/2 flex flex-col'>
							<div className='w-full h-1/3 flex flex-col items-center justify-center'>
								<div>Javier Campos</div>
								<div>@javicampelos</div>
							</div>
							<div className='w-full h-1/3 flex flex-col items-center justify-center'>
								<div className='w-5/6 h-full text-center'>
									🎵 Passionate about rap, indie, and psychedelic music
								</div>
							</div>
							<div className='w-full h-1/3 flex flex-col items-center justify-center'>
								<div className='h-4/6 w-4/6  rounded-2xl mb-1 bg-graylight flex justify-center items-center'>
									My Profile
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					id='main-middle'
					className='h-full w-1/2  border-white flex flex-col items-center'
				>
					<div
						id='newPost'
						className='w-11/12 h-32 bg-gray2 rounded-2xl flex flex-row overflow-hidden pt-2 pl-2 justify-between'
					>
						<div className='w-12 h-12 relative rounded-xl'>
							<Image
								src={ProfilePic}
								fill={true}
								className='rounded-xl border-2 border-borderdark'
								alt={''}
							/>
						</div>
						<div className='h-full w-64 flex flex-col mt-2 border-white'>
							<input
								className={`placeholder:italic placeholder:text-text-txtgray font-sans w-full focus:outline-none focus:ring-0 bg-gray2 text-txtgray ml-3`}
								placeholder='What did you hear?'
								onChange={(e) => {
									handleNewPostChange(e);
								}}
							></input>
							<div className='w-full border-white flex flex-row space-x-10 mt-10 ml-5'>
								<BsFillImageFill
									className='text-txtgray hover:text-accent hover:cursor-pointer'
									size={20}
								/>
								<PiGifFill
									className='text-txtgray hover:text-accent hover:cursor-pointer'
									size={22}
								/>
								<MdOutlineLocationOn
									className='text-txtgray hover:text-accent hover:cursor-pointer'
									size={22}
								/>
								<BiListUl
									className='text-txtgray hover:text-accent hover:cursor-pointer'
									size={22}
								/>
							</div>
						</div>
						<div
							className='h-1/3 w-1/4  rounded-2xl mb-1 bg-accent flex justify-center items-center ml-16 mr-3 mt-14 hover:cursor-pointer hover:bg-accent/70'
							onClick={() => {
								createNewPost();
							}}
						>
							Post
						</div>
					</div>
				</div>
				<div id='main-right' className='h-full w-1/4'>
					hello
				</div>
			</div>
		</div>
	);
}
