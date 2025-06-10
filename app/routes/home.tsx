import React from "react";

import type { Route } from "./+types/home";

import { Projects, Flex, About, Contact } from "~/components";

export default function Home() {
  return (
    <Flex as="main" grow justify="center">
      <Flex direction="col" grow className="py-24 px-4 gap-24 max-w-7xl">
        <About />
        <Projects />
        <Contact />
      </Flex>
    </Flex>
  );
}
