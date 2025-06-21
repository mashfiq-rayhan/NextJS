import { NextResponse } from 'next/server';

export default function middleware(req) {
  console.log(req);
  return NextResponse.next();
}

export const config = {
  matcher: '/news'
};
