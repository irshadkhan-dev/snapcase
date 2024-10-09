import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Header from "./header";
import Social from "./Social";
import BackButton from "./back-button";

interface cardWrapperprops {
  children: React.ReactNode;
  headerLabel: string;
  backbuttonLabel: string;
  backbuttonHref: string;
  showSocial?: boolean;
  headerTag: string;
}

const CardWrapper = ({
  children,
  headerLabel,
  backbuttonHref,
  backbuttonLabel,
  showSocial,
  headerTag,
}: cardWrapperprops) => {
  return (
    <Card className="w-96">
      <CardHeader>
        <Header label={headerLabel} className="" headerTag={headerTag} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          {" "}
          <Social />
        </CardFooter>
      )}

      <CardFooter>
        <BackButton href={backbuttonHref} label={backbuttonLabel} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
