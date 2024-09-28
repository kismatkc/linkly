"use client";
import { SignInForm } from "@/types/";
import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isValid },
  } = useForm<SignInForm>();
  const router = useRouter();
  const onSubmit = async (data: SignInForm) => {
    try {
      const response = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      if (response?.ok) {
       return router.push("/");
      }
      throw new Error("Invalid credentials!");
    } catch (error: any) {
    reset({password: ""})
      toast.error(error.message!);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-full  p-12 flex flex-col gap-y-4 [&>div]:gap-y-2 [&>div>input]:py-1 [&>div>input]:pl-4  md:[&>div>input]:max-w-[40%] "
    >
      <div className="flex justify-between items-center">
        <h1 className="text-md md:text-xl text-left font-semibold">Sign in</h1>
      </div>

      <div className="flex flex-col ">
        <label htmlFor="email">Email</label>

        <input
          type="email"
          id="email"
          className="border rounded-md"
          placeholder="henry56@gmail.com"
          {...register("email", {
            required: "Email is required",
            maxLength: {
              value: 50,
              message: "Email cannot exceed 50 characters",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div className="flex flex-col ">
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border rounded-md"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password must contain at least one letter and one number",
            },
          })}
        />

        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <Button className="bg-brand-grey-lite rounded-full md:max-w-[40%] " disabled={!isValid}>
        Log in
      </Button>
    </form>
  );
}

export default SignIn;
