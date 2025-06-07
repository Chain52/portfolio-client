import React from "react";

import type { Route } from "./+types/home";

import { AboutMe, Flex, Hero, ContactMe } from "~/components";

export default function Home() {
  return (
    <Flex column>
      <Hero />
      <AboutMe />
      <ContactMe />
    </Flex>
  );
}
