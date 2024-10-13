import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

const Social = () => {
  const onClick = (providers: "google" | "github") => {
    signIn(providers, {
      redirectTo: "/setting",
    });
  };

  return (
    <div className="flex items-center w-full gap-y-4 flex-col">
      <Button
        size={"lg"}
        className="w-full"
        variant={"outline"}
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-10 w-10" />
      </Button>
      <div>OR,</div>
      <Button
        size={"lg"}
        className="w-full"
        variant={"outline"}
        onClick={() => onClick("github")}
      >
        <FaGithub className="h-10 w-10" />
      </Button>
    </div>
  );
};

export default Social;
