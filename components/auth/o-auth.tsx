"use client";
import React from "react";
import CardWrapper from "./CardWrapper";

const AuthLoginPage = () => {
  return (
    <CardWrapper
      headerLabel="Login with Google or Github"
      headerTag="Login"
      showSocial
    ></CardWrapper>
  );
};

export default AuthLoginPage;
