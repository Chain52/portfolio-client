import React from "react";
import { useRootContext } from "~/contexts";
import { Flex } from "../element";

export default function AboutMe() {
  return (
    <Flex className="p-16">
      <Flex column grow align="center">
        <span>Specialities</span>
        <Flex>
          <span>Frontend</span>
          <span>Backend</span>
          <span>Cloud</span>
        </Flex>
      </Flex>
    </Flex>
  );
}
