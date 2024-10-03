import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  imgSrc: string;
  dark?: boolean;
}

function Phone({ className, imgSrc, dark = false, ...props }: PhoneProps) {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className,
      )}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="pointer-events-none select-none z-50"
      />

      <div className="absolute -z-10 inset-0">
        <img src={imgSrc} className="object-cover" />
      </div>
    </div>
  );
}

export default Phone;
