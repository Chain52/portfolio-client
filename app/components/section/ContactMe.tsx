import React from "react";
import { useRootContext } from "~/contexts";
import { Flex } from "../element";

export default function ContactMe() {
  return (
    <Flex column grow align="center" className="p-16">
      <span>Contact Me</span>
    </Flex>
  );
}
