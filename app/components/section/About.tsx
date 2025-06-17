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
      className="scroll-mt-24 sm:gap-4 sm:divide-x"
    >
      <Flex
        grow={{ sm: true }}
        direction="col"
        align="center"
        justify="center"
        className="h-full"
      >
        <h1 className="text-5xl font-bold">Hi, I'm Colin Hain</h1>
        <h3 className="text-3xl font-medium">A Full-Stack Developer</h3>
      </Flex>
      <Flex direction="col" className="gap-4">
        <Flex direction="col" className="max-w-prose gap-4 text-lg/relaxed">
          <p>
            I'm a full-stack developer who builds internal tools, scalable
            systems, and cloud-native applications using React, TypeScript,
            Node.js, and AWS.
          </p>
          <p>
            My career began in QA and IT support, evolved through self-directed
            development, and now spans frontend interfaces, serverless backends,
            platform refactors, and infrastructure automation. I've contributed
            to enterprise platforms used by hundreds and built systems that
            replaced brittle legacy code with maintainable, modern
            architectures.
          </p>
          <p>
            I focus on developer experience, performance, and clear system
            design—whether I'm shipping features, debugging distributed systems,
            or translating messy workflows into usable platforms.
          </p>
          <p>
            In the Projects section, I've highlighted three proprietary
            enterprise systems I helped build, detailing the architecture,
            challenges, and real-world outcomes. You'll also find personal
            explorations and prototypes on GitHub, with more updates coming soon
            as I continue to evolve this space.
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
            <JumpLink anchor="projects" name="Browse Projects" variant="cta" />
          </Flex>
          {/* <span>LinkedIn, GitHub, etc.</span> */}
        </Flex>
      </Flex>
    </Flex>
  );
}
