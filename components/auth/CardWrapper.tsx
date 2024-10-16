import React from "react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import Header from "./header";
import Social from "./Social";

interface cardWrapperprops {
  headerLabel: string;
  children: React.ReactNode;
  showSocial?: boolean;
  headerTag: string;
}

const CardWrapper = ({
  headerLabel,
  children,
  showSocial,
  headerTag,
}: cardWrapperprops) => {
  return (
    <Card className="w-96">
      <CardHeader>
        <Header label={headerLabel} className="" headerTag={headerTag} />
      </CardHeader>
      {children}
      {showSocial && (
        <CardFooter>
          {" "}
          <Social redirectUrl="/setting" />
        </CardFooter>
      )}
    </Card>
  );
};

export default CardWrapper;
