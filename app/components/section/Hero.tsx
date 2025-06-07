import React from "react";
import { useRootContext } from "~/contexts";
import { Flex } from "../element";

export default function Hero() {
  return (
    <Flex className="p-16">
      <Flex grow justify="center" align="center" className="basis-1/2">
        <span>place big ole mugshot here</span>
      </Flex>
      <Flex
        column
        grow
        justify="center"
        className="px-16 block w-1/2 basis-1/2"
      >
        <span>Colin Hain</span>
        <span>A [bunch of keywords]</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          in sagittis leo, id iaculis ipsum. Fusce consectetur dignissim justo,
          iaculis facilisis libero dignissim in. Vivamus lacinia gravida ipsum
          ut bibendum.
        </span>
        <Flex>
          <span>CTA: Contact Me</span>
          <span>CTA: Projects</span>
        </Flex>
        <Flex>
          <span>LinkedIn, GitHub, etc.</span>
        </Flex>
      </Flex>
    </Flex>
  );
}
