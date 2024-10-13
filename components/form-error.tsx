import React from "react";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const FormError = ({ message }: { message?: string }) => {
  if (!message) {
    return null;
  }
  return (
    <div className="bg-destructive/15 flex items-center rounded-md p-3 gap-x-2 text-sm text-destructive w-full">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
