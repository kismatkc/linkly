"use client"
import SignUp from "@/components/signup-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

const Account = () => {
  return (
    <section className=" overflow-hidden h-screen w-full  flex flex-col max-w-5xl ">
      <SignUp />

      <div className="flex-row-center [&>span]:mr-1 pb-8 ">
        <span className="border-t-2 grow border-dashed"></span>
        <span className="mx-2">OR</span>
        <span className="border-t-2 grow border-dashed"></span>
      </div>
      <Button variant="outline" className="rounded-full flex-row-center w-full"  onClick={() => {
          signIn("google", { callbackUrl: "/" });
        }}>
        <figure className="flex-row-center gap-x-2">
          <Image
            alt="google icon"
            width={24}
            height={24}
            src="/icons/google.svg"
            className="size-6"
          />
          <figcaption className="font-light text-nowrap">
            Continue with Google
          </figcaption>
        </figure>
      </Button>
    </section>
  );
};

export default Account;
