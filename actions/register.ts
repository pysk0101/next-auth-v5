"use server"

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.parse(values);

    console.log("user values", validatedFields);
    if (!validatedFields) {
        return { error: "Invalid fields" };
    }

    const { email, password, name } = validatedFields;

    const result = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, name })
    });

    if (!result.ok) {
        return { error: "Error creating user" };
    }

    console.log(result);

    // Todo: send email

    return { success: "User Created" };
}
