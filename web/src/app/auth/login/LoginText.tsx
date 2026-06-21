"use client";

import React from "react";
import Text from "@/refresh-components/texts/Text";

export default function LoginText() {
  return (
    <div className="w-full flex flex-col items-center">
      <Text
        as="p"
        headingH2
        text05
        className="font-display text-[26px] leading-tight"
      >
        Welcome
      </Text>
      <Text as="p" text03 mainUiMuted>
        Sign in to the Three Crowns research platform
      </Text>
    </div>
  );
}
