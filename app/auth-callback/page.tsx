"use client";

import { Loader2 } from "lucide-react";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AuthPage = () => {
  const router = useRouter();

  const [configId, setConfigId] = useState<string | null>(null);

  useEffect(() => {
    const configurationId = localStorage.getItem("ConfigurationId");
    if (configurationId) setConfigId(configurationId);
  }, []);

  if (configId) {
    localStorage.removeItem("ConfigurationId");
    router.push(`/configure/preview?id=${configId}`);
  }

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
        <h3 className="font-semibold text-xl">Logging you in...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
};

export default AuthPage;
