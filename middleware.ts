import authConfig from "./auth.config";
import NextAuth from "next-auth";
import {
    DEFAULT_LOGIN_REDIRECT,
    publicRoutes,
    authRoutes,
    apiAuthPrefix
} from "@/routes";

//Configuration
export const { auth } = NextAuth(authConfig);

//Here chechks every request
export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    
    // if routes starts with /api/auth, user can access them without login  
    if (isApiAuthRoute) {
        return undefined;
    }

    //User is loggened and he accessed the login or register. He will be redirected to DEFAULT_LOGIN_REDIRECT   
    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT));
        }
        return undefined;
    }


    //User is not logged and he is trying to access private routes
    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL("/auth/login",nextUrl));
    }

    return undefined;
});
 
export const config = {
    matcher: [
        '/((?!api|trpc|_next/static|_next/image|favicon.ico).*)',
    ]
};

