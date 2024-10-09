import { cn } from "@/lib/utils";
import React from "react";

const Header = ({
  label,
  className,
  headerTag,
}: {
  label: string;
  className: string;
  headerTag: string;
}) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", className)}>{headerTag}</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;
