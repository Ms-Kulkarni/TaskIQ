"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
// import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { CardContent, CardDescription } from "@/components/ui/card";

const loginSchema = z.object({
  email: z.email("please enter a valid email address"),
  password: z.string().min(1, "password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginFrom() {
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    console.log(values);
  };

  const isPending = form.formState.isSubmitting;
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>
            WellCome Back
          </CardTitle>
          <CardDescription>
            Login to Continune
          </CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onsubmit={form.handleSubmit(onSubmit)}>
                    <div calssName="grid gap-6">
                      <div className="flex flex-col gap-4">
                        <Button
                          variant="outline"
                          className="w-full"
                          disabled={isPending}
                        >
                          Continue with GitHUb
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full"
                          disabled={isPending}
                        >
                          Continue with Google
                        </Button>
                        <div className='grid gap-6'>
                          <FormField
                            control={for,.control}
                            name="email"
                            render={({field}) => {
                              <FormItem>
                                <FromLable>Email</FromLable>
                                <FormControl>
                                  <Input
                                    type='email'
                                    placeholder='example@gmail.com'
                                    {...field}
                                  />
                                  <FormField
                                  control={for,.control}
                                  name="password"
                                  render={({field}) => {
                                    <FormItem>
                                      <FromLable>Passwrod</FromLable>
                                      <FormControl>
                                        <Input
                                          type='password'
                                          placeholder='password'
                                          {...field}
                                        />
                                        <Button
                                          type='submit'
                                          className='w-full' disabled={isPending}
                                        >Login</Button>
                                        
                                </FormControl>
                              </FormItem>
                            }}
                          />
                        </div>
                      </dev>
                    </div>
                </from>
            </Form>
        </CardContent>
      </Card>
    </div>
  );
}
