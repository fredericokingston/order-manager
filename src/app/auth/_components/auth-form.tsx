"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
  const form = useForm();

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn("nodemailer", {
        email: data.email,
        redirect: false,
      });
      toast({
        title: "Magic link sent",
        description: `Check your email for a magic link to sign in.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred sending the magic link.",
      });
    }
  });

  return (
    <div className={cn("grid gap-4", className)} {...props}>
      <h1 className="text-2xl font-bold">Login</h1>

      <p className="text-sm text-gray-600">
        Enter your email to sign in or create an account.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={form.formState.isSubmitting}
              {...form.register("email", { required: true })}
            />
          </div>
          <Button disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Sending..." : "Send a magic link"}
          </Button>
        </div>
      </form>
    </div>
  );
}
