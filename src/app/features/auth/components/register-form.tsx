"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';

import {
    Form,
    FormControl,
    FormLabel,
    FormItem,
    FormField,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Register } from '@tanstack/react-query';

const registerForm = z.object({
    email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
    password: z.string().min(1, "Password is required"),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
}); 


type LoginFormValue = z.infer<typeof registerForm>;

export function RegisterForm(){
    const router = useRouter();

    const form = useForm<LoginFormValue>({
        resolver: zodResolver(registerForm),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },

    });

    const onSubmit = async (values: RegisterFormValues ) => {
        await authClient.signUp.email(
            {
                name: values.email,
                email: values.email,
                password: values.password,
                callbackUrl: "/",
            }, 
            {
                onSuccess: () => {
                    router.push("/");

                }, 
                onError: (ctx) => {
                    toast.error(ctx.error.message);
                }
            }
        )

    const isPending = form.formState.isSubmitting;

    return (
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader className='text-center'>
                    <CardTitle>Get Started</CardTitle>
                    <CardDescription>Create an account</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid gap-6">
                            <div className="flex flex-col gap-4">
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    type="button"
                                    disabled={isPending}>
                                    Continue with Github
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    type="button"
                                    disabled={isPending}>
                                    Continue with Google
                                </Button>

                            </div>
                            <div>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel 
                                                className=''
                                            >Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="m@example.com"
                                                    {...field}
                                                />
                                                
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                /><br/>
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel 
                                                className=''
                                            >Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="********"
                                                    {...field}
                                                />
                                                
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                /><br/>
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel 
                                                className=''
                                            >Confirm Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="********"
                                                    {...field}
                                                />
                                                
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                
                                <Button type="submit" className='w-full' disabled={isPending}>Sign Up</Button>

                            </div>
                            <div className='text-center text-sm'>
                                 Already have an account? {" "}
                                 <Link 
                                    href="/login"
                                    className="underline underline-offset-4"
                                 >Login</Link>
                            </div>

                        </div>

                    </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
} 