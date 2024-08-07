//Kurulumu baslattigimiz ve  fonksiyonlari dagitima cikardigimiz yer.

import NextAuth from "next-auth"
import authConfig from "./auth.config"
import {PrismaAdapter} from '@auth/prisma-adapter'
import { db } from "./lib/db"

export const {
    handlers,
    auth,
    signIn, 
    signOut
} =     NextAuth({
    callbacks : {
        async session({token,session}){

            session.user.id = token.sub!
            console.log(session)
            return session
        },
        async jwt({token,user}){
            console.log({user})
            console.log({token})
            return token
        }
        
    },
    // adapter : PrismaAdapter(db),
    session : {strategy : "jwt"},
    secret : process.env.NEXTAUTH_SECRET,
    ...authConfig
})