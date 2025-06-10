import React from "react";
import { Flex } from "../element";

export default function Projects() {
  return (
    <Flex as="section" id="projects" direction="col" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <Flex as="ul" justify="evenly">
        <Flex
          as="li"
          direction="col"
          className="border rounded-lg p-2 basis-1/4"
        >
          <h3 className="text-xl font-semibold">Project 1</h3>
        </Flex>
        <Flex
          as="li"
          direction="col"
          className="border rounded-lg p-2 basis-1/4"
        >
          <h3 className="text-xl font-semibold">Project 2</h3>
        </Flex>
        <Flex
          as="li"
          direction="col"
          className="border rounded-lg p-2 basis-1/4"
        >
          <h3 className="text-xl font-semibold">Project 3</h3>
        </Flex>
      </Flex>
    </Flex>
  );
}
