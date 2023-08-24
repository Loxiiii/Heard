import { createRouteHandlerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request) {
	console.log('From the callback function in the Auth v2');
	const requestUrl = new URL(request.url);
	const code = requestUrl.searchParams.get('code');

	if (code !== null) {
		const supabase = createRouteHandlerSupabaseClient({ cookies });
		await supabase.auth.exchangeCodeForSession(code);
	}

	return NextResponse.redirect('/feedv2');
}
