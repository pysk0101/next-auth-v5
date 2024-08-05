"use client";

import * as z from "zod";
import { useState,useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
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
import { register } from "@/actions/register";  


export default function RegisterForm() {


  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending , startTransition] = useTransition();


   
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name:"",
      email: "",
      password: "",
    },
  });

  const onSubmit =  (values : z.infer<typeof RegisterSchema>) => {
    setError("")
    setSuccess("")

    startTransition(() => {
      register(values).then((res) => {
          setError(res.error)
          setSuccess(res.success)
        }
      )
    
    })
    
  }

  return (
    <CardWrapper
      headerLabel="Welcome to Our Platform!"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input  
                      {...field}
                      disabled={isPending}
                      placeholder="John Doe"
                      type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            Sing Up
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
