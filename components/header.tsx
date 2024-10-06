"use client";
import { LogOut } from "lucide-react";
import React, { useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="flex justify-between pt-8 px-4">
      <h1 className="gradient-styling md:text-5xl select-none">Linkly</h1>
      <div className="flex-row-center gap-x-3">
        <ThemeToggle />
        <button
          className="flex-row-center gap-x-2 bg-brand-grey-dark text-white rounded-full px-5 py-2"
          onClick={() => {
            signOut({ redirect: true, callbackUrl: "/log-in" });
          }}
        >
          <Avatar>
            {session?.user?.image ? (
              <AvatarImage src={session.user.image} />
            ) : (
              <AvatarFallback className="text-brand-grey-dark font-extrabold">
                {
                  //@ts-ignore
                  session?.user?.name[0].toLocaleUpperCase()
                }
              </AvatarFallback>
            )}
          </Avatar>
          Logout
          <LogOut />
        </button>
      </div>
    </header>
  );
};

export default Header;
