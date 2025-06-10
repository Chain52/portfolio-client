import React from 'react';

import { Flex } from '../element';
import JumpLink from './JumpLink';

const NavItems = () => {
  return (
    <Flex
      grow
      justify="between"
      align="center"
      className="max-w-7xl mx-auto px-4 py-3"
    >
      <JumpLink
        anchor="about"
        name="Colin Hain"
        className="font-bold text-xl"
      />
      <Flex grow justify="center">
        <JumpLink anchor="about" name="About" />
        <JumpLink anchor="projects" name="Projects" />
        <JumpLink anchor="contact" name="Contact" />
      </Flex>
    </Flex>
  );
};

export default function Navbar() {
  return (
    <Flex as="nav" id="top" className="w-full fixed z-10 top-0 bg-white shadow">
      <NavItems />
    </Flex>
  );
}
