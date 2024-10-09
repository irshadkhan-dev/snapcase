import React from "react";

import { CheckCircledIcon } from "@radix-ui/react-icons";

const FormSuccess = ({ message }: { message?: string }) => {
  if (!message) {
    return null;
  }
  return (
    <div className="bg-emerald-500/15 flex items-center rounded-md p-3 gap-x-2 text-sm text-emerald-500">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
