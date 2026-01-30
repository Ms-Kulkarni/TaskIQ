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
                <form>
                    
                </from>
            </Form>
        </CardContent>
      </Card>
    </div>
  );
}
