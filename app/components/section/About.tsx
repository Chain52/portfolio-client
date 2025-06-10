import React from 'react';

import { Flex } from '../element';
import { JumpLink } from '../navigation';

export default function About() {
  return (
    <Flex
      as="section"
      id="about"
      direction={{ base: 'col', sm: 'row' }}
      justify={{ sm: 'between' }}
      align="center"
      className="scroll-mt-24"
    >
      <Flex direction="col">
        <h1 className="text-5xl font-bold">Hi, I'm Colin Hain</h1>
        <h3 className="text-3xl font-medium">A TypeScript Developer</h3>
      </Flex>
      <Flex direction="col" className="gap-4">
        <Flex direction="col" className="max-w-prose text-lg gap-4">
          <p>
            I'm a developer who builds fast, responsive interfaces with React
            and TypeScript. I focus on clarity throughout every layer of the
            stack.
          </p>
          <p>
            My background in QA, project coordination, and internal platform
            tooling shaped how I think about testing, delivery, and
            architecture. I bring a backend-aware mindset and hands-on
            experience with APIs, AWS infrastructure, and cross-team delivery.
          </p>
          <p>
            I thrive where complexity and clarity intersect, whether I'm
            designing internal tools, refining UX flows, or writing maintainable
            code that scales in production.
          </p>
        </Flex>
        <Flex direction="col" className="px-4">
          <Flex
            direction={{ base: 'col', sm: 'row' }}
            className="gap-2 sm:gap-4"
          >
            <JumpLink
              anchor="contact"
              name="Let's Work Together"
              variant="cta"
            />
            <JumpLink anchor="projects" name="View My Work" variant="cta" />
          </Flex>
          {/* <span>LinkedIn, GitHub, etc.</span> */}
        </Flex>
      </Flex>
    </Flex>
  );
}
