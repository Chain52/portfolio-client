import React from 'react';

import { Flex } from '../element';

export default function Contact() {
  return (
    <Flex as="section" id="contact" direction="col" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p>
        Email:{' '}
        <a
          href="mailto:hain5252@gamil.com"
          className="text-blue-500 hover:underline"
        >
          hain5252@gmail.com
        </a>
      </p>
      <p>
        LinkedIn:{' '}
        <a
          href="https://linkedin.com/in/colinhain"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          linkedin.com/in/colinhain
        </a>
      </p>
      <p>
        Calendly:{' '}
        <a
          href="https://calendly.com/colinhain"
          className="text-blue-500 hover:underline"
        >
          calendly.com/colinhain
        </a>
      </p>
    </Flex>
  );
}
