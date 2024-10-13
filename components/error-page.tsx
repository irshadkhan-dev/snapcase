import React from "react";
import CardWrapper from "./auth/CardWrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! something went wrong"
      headerTag="Authentication Error"
      backbuttonHref="/auth/login"
      backbuttonLabel="Back to Login"
    >
      <div className="text-destructive w-full flex items-center justify-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
