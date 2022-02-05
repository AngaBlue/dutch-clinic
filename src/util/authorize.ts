import { verify, decode } from 'jsonwebtoken';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';

export const week = 7 * 24 * 60 * 60;

interface JWT {
    sub: string;
    email: string;
    rt: string;
}

export default function authorize(cookies: NextApiRequestCookies): JWT | null {
    const cookie = cookies['fp-google'];

    // Check existance, verify validity, and check age
    if (!cookie || !verify(cookie, process.env.COOKIE_SECRET, { maxAge: week })) return null;

    // Decode
    const jwt = decode(cookie) as JWT;

    return jwt;
}
