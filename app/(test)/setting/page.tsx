import { auth, signOut } from "@/auth";

import React from "react";

const SettingPage = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <button type="submit" className="bg-green-600 p-2 text-white rouded-lg">
          Sign out
        </button>
      </form>
    </div>
  );
};

export default SettingPage;
