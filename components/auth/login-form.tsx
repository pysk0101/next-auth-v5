"use client";

import * as z from "zod";
import { useState,useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/form-error";
import { Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "./card-wrapper";
import { FormSuccess } from "../form-succes";
import { login } from "@/actions/login";
export default function LoginForm() {


  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending , startTransition] = useTransition();


   
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit =  (values : z.infer<typeof LoginSchema>) => {
    setError("")
    setSuccess("")

    startTransition(() => {
      login(values).then((res : any) => {
          console.log("bu adamin burasi calisti.")
          setError(res?.error)
          setSuccess(res?.success)
        }
      )
    
    })
    
  }

  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="space-y-6"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                        {...field}
                        disabled={isPending}
                        placeholder="john.doe@example.com"
                        type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input  
                      {...field}
                      disabled={isPending}
                      placeholder="*********"
                      type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
          <FormError message={error}/>
          <FormSuccess message={success}/>
          <Button
          disabled={isPending}
            type="submit"
            className="w-full"
            >
            Log in
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
