import { LogOut } from "lucide-react";
import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { signOut } from "next-auth/react";

const Header = () => {

  return (
    <header className="flex justify-between pt-8 px-4 ">
      <h1 className="gradient-styling md:text-5xl select-none">Linkly</h1>
      <div className="flex gap-x-3">
        <ThemeToggle />
        <button
          className="flex-row-center gap-x-2 bg-brand-grey-dark text-white rounded-full px-5 py-2"
          onClick={() => {
            signOut({ redirect: true, callbackUrl: "/log-in" });
          }}
        >
          Logout
          <LogOut />
        </button>
      </div>
    </header>
  );
};

export default Header;
