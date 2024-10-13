import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Header from "./header";
import Social from "./Social";
import BackButton from "./back-button";
import FormError from "../form-error";

interface cardWrapperprops {
  headerLabel: string;

  showSocial?: boolean;
  headerTag: string;
}

const CardWrapper = ({
  headerLabel,

  showSocial,
  headerTag,
}: cardWrapperprops) => {
  return (
    <Card className="w-96">
      <CardHeader>
        <Header label={headerLabel} className="" headerTag={headerTag} />
      </CardHeader>

      {showSocial && (
        <CardFooter>
          {" "}
          <Social />
        </CardFooter>
      )}
    </Card>
  );
};

export default CardWrapper;
