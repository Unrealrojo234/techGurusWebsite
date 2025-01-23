import { Resend } from 'resend';

import { VITE_API_KEY, VITE_RECEPIENT_EMAIL } from '$env/static/private';

let resend_api_key = VITE_API_KEY;

let recipient_email = VITE_RECEPIENT_EMAIL;

const resend = new Resend(resend_api_key);

export async function GET({ url }) {
	const email = url.searchParams.get('email') || 'johndoe@gmail.com';
	const name = url.searchParams.get('name') || 'John Doe';
	const msg = url.searchParams.get('msg') || 'Hello, World';

	try {
		const { data, error } = await resend.emails.send({
			from: 'Tech It <onboarding@resend.dev>',
			to: ['ryanotieno00001@gmail.com', 'tonyodhiambo419@gmail.com', 'gore6429@gmail.com'],
			subject: 'Tech It',
			html: `
            <h1 style='text-align:center;color:rebeccapurple;'>Tech Gurus Message</h1>
            <p>Name: ${name},</p>
            <h3>Message</h3>
            <p>${msg}</p>
            <a target='_blank' href="mailto:${email}">Sender Email</a>
            `
		});

		if (error) {
			return new Response(JSON.stringify({ error }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		return new Response(JSON.stringify({ data }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		return new Response(
			JSON.stringify({
				error: 'Internal Server Error',
				details: err.message
			}),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	}
}
