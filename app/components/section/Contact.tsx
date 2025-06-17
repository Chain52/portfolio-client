import React from 'react';

import { Flex, ButtonLink } from '../element';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

export default function Contact() {
  const [widgetHeight, setWidgetHeight] = React.useState('auto');

  useCalendlyEventListener({
    onPageHeightResize(e) {
      setWidgetHeight(e.data.payload.height);
    }
  });

  return (
    <Flex as="section" id="contact" direction="col" className="scroll-mt-24">
      <h2 className="mb-4 text-3xl font-bold">Contact</h2>
      <Flex direction={{ base: 'col', sm: 'row' }} className="gap-4">
        <Flex
          direction="col"
          justify="center"
          grow
          className="max-w-prose gap-4"
        >
          <h3 className="mb-5 text-2xl font-semibold">Let's Talk</h3>
          <p>
            I'm currently open to full-time roles, contract work, and
            collaborative projects where clear thinking and reliable systems
            matter.
          </p>
          <p>
            If you're a recruiter, hiring manager, or engineer looking to talk
            about a team, a challenge, or an opportunity, I'd be happy to
            connect.
          </p>
          <p>
            You can use the scheduler on the right to book a quick call, or
            reach out directly via email or LinkedIn if you prefer.
          </p>
          <Flex className="mt-4 gap-4">
            <ButtonLink
              href="mailto:colinphain@gamil.com"
              text="Email Me"
              icon="mdi:email-outline"
            />
            <ButtonLink
              href="https://www.linkedin.com/in/colin-hain"
              text="Connect on LinkedIn"
              icon="mdi:linkedin"
            />
          </Flex>
        </Flex>
        <Flex grow className="-mt-16 -mb-7">
          <InlineWidget
            url="https://calendly.com/colinphain"
            styles={{ width: '100%', height: widgetHeight }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
