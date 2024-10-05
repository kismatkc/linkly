"use client";
import { SignUpForm } from "@/types/";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Api } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpForm>();
  const router = useRouter();
  const onSubmit = async (data: SignUpForm) => {
    try {
      const response = await Api.post("/create-user", data);
      if (response.data) router.push("/log-in");
    } catch (error: any) {
      toast.error("Account creation failed please try again");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-full  p-12 flex flex-col gap-y-4 [&>div]:gap-y-2 [&>div>input]:py-1 [&>div>input]:pl-4  md:[&>div>input]:max-w-[40%] "
    >
      <div className="flex justify-between items-center">
        <h1 className="text-md md:text-xl text-left font-semibold">
          Create an account
        </h1>
        <Link href="/sign-in" className="underline">
          Login instead
        </Link>
      </div>
      <div className="flex flex-col ">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          className="border rounded-md"
          placeholder="kismat"
          {...register("firstName", {
            required: "First name is required",
            maxLength: {
              value: 20,
              message: "First name cannot exceed 20 characters",
            },
            minLength: {
              value: 2,
              message: "First name must be at least 2 characters long",
            },
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "First name can only contain letters",
            },
          })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div className="flex flex-col ">
        <label htmlFor="lastName">Last Name</label>

        <input
          type="text"
          id="lastName"
          className="border rounded-md"
          placeholder="k c"
          {...register("lastName", {
            required: "Last name is required",
            maxLength: {
              value: 20,
              message: "Last name cannot exceed 20 characters",
            },
            minLength: {
              value: 2,
              message: "Last name must be at least 2 characters long",
            },
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Last name can only contain letters",
            },
          })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
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
      <div className="flex gap-x-2  text-left">
        <input
          type="checkbox"
          id="consent"
          className="border rounded-md"
          {...register("consent", {
            required: "Consent is required",
          })}
        />
        <label htmlFor="consent">
          By creating an account, I agree to our&nbsp;
          <span className="underline font-light">
            Terms of use and Privacy Policy
          </span>
        </label>
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <Button
        className="bg-brand-grey-lite rounded-full md:max-w-[40%]  "
        disabled={!isValid}
      >
        Create an account
      </Button>
    </form>
  );
}

export default SignUp;
