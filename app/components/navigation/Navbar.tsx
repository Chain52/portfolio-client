import React from 'react';

import { Flex } from '../element';
import JumpLink from './JumpLink';

const NavItems = () => {
  return (
    <Flex
      grow
      justify="between"
      align="center"
      className="relative mx-auto max-w-7xl px-4 py-3"
    >
      <Flex className="left-0 sm:absolute">
        <JumpLink
          anchor="about"
          name="Colin Hain"
          className="text-xl font-bold"
        >
          <img src="/favicon-32x32.png" className="h-8 w-8" />
        </JumpLink>
      </Flex>
      <Flex grow justify="center" className="mt-1">
        <JumpLink anchor="about" name="About" className="text-lg" />
        <JumpLink anchor="projects" name="Projects" className="text-lg" />
        <JumpLink anchor="contact" name="Contact" className="text-lg" />
      </Flex>
    </Flex>
  );
};

export default function Navbar() {
  return (
    <Flex as="nav" id="top" className="fixed top-0 z-10 w-full bg-white shadow">
      <NavItems />
    </Flex>
  );
}
