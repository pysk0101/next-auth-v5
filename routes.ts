
//The routes everybody can see
export const publicRoutes = [
    "/",
    "/dashboard"
]

// the routes we redirect user to 
export const authRoutes = [
    "/auth/login",
    "/auth/register"
]

export const apiAuthPrefix = "/api/auth"

export const DEFAULT_LOGIN_REDIRECT= "http://localhost:3000/settings"