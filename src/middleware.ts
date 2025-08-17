import { NextResponse, NextRequest } from "next/server";
import { AuthService } from "./services/auth.service";


interface TokenResponse {
    message: string;
}

export async function middleware(request: NextRequest){
    const authService = new AuthService();
    const { pathname } = request.nextUrl;
    const protectedRoutes = ['/dashboard', '/settings', '/profile'];

    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
    if (isProtectedRoute){
        try {
            const cookie = request.headers.get('Cookie') || undefined;
            const response = await authService.verifyToken(cookie);
            if (response.status !== 200) {
                return NextResponse.redirect(new URL('/login', request.url));
            }
        } catch (error) {
            console.error('Token verification failed:', error);
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
}