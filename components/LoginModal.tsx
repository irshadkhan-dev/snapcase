import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import Image from "next/image";

import Social from "./auth/Social";

const LoginModal = ({
  isOpen,
  setIsOpen,
  redirectUrl,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  redirectUrl: string;
}) => {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent className="absolute z-[999999]">
        <DialogHeader>
          <div className="relative mx-auto h-24 w-24 mb-2">
            <Image
              src={"/snake-1.png"}
              alt="snake image"
              className="object-contain"
              fill
            />
          </div>

          <DialogTitle className="text-3xl text-center tracking-tight font-bold text-gray-900">
            Login to continue
          </DialogTitle>

          <DialogDescription className="text-base text-center py-2">
            <span className="font-medium text-zinc-900">
              Your configuration was saved!
            </span>{" "}
            Please login to complete your purchase!
          </DialogDescription>
        </DialogHeader>

        <div className=" divide-x divide-gray-200">
          <Social redirectUrl={redirectUrl} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
