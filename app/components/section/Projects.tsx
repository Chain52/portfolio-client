import React from 'react';
import clsx from 'clsx';
import { Icon } from '@iconify/react';

import { Flex } from '../element';
import { Technologies, type Technology } from '~/constants';
import { useContainerDimensions } from '~/hooks/useContainerDimensions';

interface ProjectCardProps extends React.PropsWithChildren {
  id: string;
  title: string;
  technologies: Technology[];
  className?: string;
}

const ProjectCard = ({
  id,
  title,
  technologies,
  className,
  children
}: ProjectCardProps) => {
  return (
    <Flex direction="col" className={className}>
      <Flex direction="col" className="rounded-lg border">
        <Flex justify="center" align="baseline" className="border-b px-2 py-3">
          <h3 className="text-center text-3xl font-semibold">{title}</h3>
        </Flex>
        <Flex className="p-2">
          <Flex grow direction="col">
            <Flex direction="col" className="gap-2 border-b">
              <h4 className="text-lg font-medium">Technologies</h4>
              <Flex wrap justify="evenly" className="gap-4 px-4">
                {technologies.map((technology) => (
                  <Flex
                    key={`${technology.name.replaceAll(/[\s\.]/g, '')}-${id}`}
                    direction="col"
                    align="center"
                    className="w-30 overflow-visible"
                  >
                    {typeof technology.icon === 'function' && technology.icon()}
                    {typeof technology.icon !== 'function' && (
                      <Icon
                        icon={
                          typeof technology.icon === 'string'
                            ? technology.icon
                            : technology.icon.light
                        }
                        className="sm:text-5xl"
                      />
                    )}
                    <span className="max-w-36 text-center text-lg text-wrap">
                      {technology.name}
                    </span>
                  </Flex>
                ))}
              </Flex>
            </Flex>
            <Flex className="p-2">{children}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default function Projects() {
  return (
    <Flex
      as="section"
      id="projects"
      direction="col"
      className="scroll-mt-24 gap-1"
    >
      <Flex align="baseline" justify="between" className="gap-4">
        <h2 className="mb-4 text-3xl font-bold">Projects</h2>
        <a
          href="https://github.com/Chain52"
          target="_blank"
          className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-lg font-medium text-white hover:bg-blue-700"
        >
          <Icon icon="simple-icons:github" className="text-2xl" />
          <span>GitHub</span>
        </a>
      </Flex>
      <Flex direction="col" className="gap-4 sm:mx-8">
        <ProjectCard
          id="ikbp"
          title="Internal Knowledge Base Platform"
          technologies={[
            Technologies.React,
            Technologies.TypeScript,
            Technologies.Tailwind,
            Technologies.ReactRouter,
            Technologies.Motion,
            Technologies.MobX,
            Technologies.Zod,
            Technologies.Sanity,
            Technologies.Docker,
            Technologies.Fargate,
            Technologies.S3
          ]}
          className=""
        >
          <Flex direction="col" className="gap-2">
            <Flex direction="col">
              <h4 className="text-sm font-black text-gray-500">SUMMARY</h4>
              <Flex className="px-2">
                <p>
                  Solely Developed a modern internal knowledge base used by over
                  200 employees, replacing a legacy HTML/CSS/JavaScript platform
                  in a tight nine-month timeline.
                </p>
              </Flex>
            </Flex>
            <Flex direction="col">
              <h4 className="text-sm font-black text-gray-500">DETAILS</h4>
              <Flex direction="col" className="gap-2 px-2">
                <p>
                  Worked cross-functionally with UX designer to prototype the
                  platform for stakeholder approval in Figma.
                </p>
                <p>
                  Architected the frontend with React and React Router, using
                  the listed technologies to create a polished, responsive,
                  reactive, and type-safe UI. Integrated file sharing with the
                  Box API and SSO via Microsoft Graph.
                </p>
                <p>
                  Implemented custom Sanity CMS studio, equipped with workflows
                  to significantly reduce publishing pain points.
                </p>
                <p>
                  Deployed to an AWS Fargate service with multi-environment
                  load-balancing following template used on other platforms in
                  the company.
                </p>
              </Flex>
            </Flex>
            <Flex direction="col">
              <h4 className="text-sm font-black text-gray-500">RECEPTION</h4>
              <Flex className="px-2">
                <p>
                  Content managers experienced a drastic boost in productivity,
                  as they were able to publish content at least twice as fast
                  since they no longer needed to write static code. Users
                  benefited from being able to find knowledge more quickly
                  through improved search and role-based content distribution.
                </p>
              </Flex>
            </Flex>
          </Flex>
        </ProjectCard>
        <Flex direction={{ base: 'col', sm: 'row' }} className="gap-4">
          <ProjectCard
            id="mns"
            title="Notification Service"
            technologies={[
              Technologies.Node,
              Technologies.Express,
              Technologies.Lambda,
              Technologies.MongoDB,
              Technologies.Mongoose,
              Technologies.Twilio,
              Technologies.Figma
            ]}
            className="sm:flex-1"
          >
            <Flex direction="col" className="gap-2">
              <Flex direction="col">
                <h4 className="text-sm font-black text-gray-500">SUMMARY</h4>
                <Flex className="px-2">
                  <p>
                    Collaborated with developers and architects on a serverless
                    application. Owned the notification service and designed a
                    database access layer using MongoDB and Mongoose and an
                    event-driven API in AWS Lambda.
                  </p>
                </Flex>
              </Flex>
              <Flex direction="col">
                <h4 className="text-sm font-black text-gray-500">DETAILS</h4>
                <Flex direction="col" className="gap-2 px-2">
                  <p>
                    Integrated Twilio to handle dynamic, personalized email and
                    SMS communication. Deployed each operation as an isolated
                    AWS Lambda function, enabling fine-grained observability,
                    scalability, and maintainability. Charted event flows and
                    documented handler triggers to improve clarity and support
                    ongoing development.
                  </p>
                  <p>
                    Improved initially provided UX through adjustments in Figma
                    based on client feedback. Prototyped those static UX designs
                    for early user access testing.
                  </p>
                </Flex>
              </Flex>
              <Flex direction="col">
                <h4 className="text-sm font-black text-gray-500">RECEPTION</h4>
                <Flex className="px-2">
                  <p>
                    Through my contributions to the UX prototype, the app's
                    pitch outperformed competitors in securing mobility tech
                    contracts. Focus groups praised the app's clarity and
                    accessibility.
                  </p>
                </Flex>
              </Flex>
            </Flex>
          </ProjectCard>
          <ProjectCard
            id="sto"
            title="Salesforce Tooling/Optimization"
            technologies={[Technologies.Salesforce, Technologies.LWC]}
            className="sm:flex-1"
          >
            <Flex direction="col" className="gap-2">
              <Flex direction="col">
                <h4 className="text-sm font-black text-gray-500">SUMMARY</h4>
                <Flex direction="col" className="px-2">
                  <p>
                    Redesigned a legacy Salesforce codebase by introducing the
                    modular patterns, a robust TTD framework, and operational
                    tooling to improve maintainability and resilience.
                  </p>
                </Flex>
              </Flex>
              <Flex direction="col">
                <h4 className="text-sm font-black text-gray-500">DETAILS</h4>
                <Flex direction="col" className="gap-2 px-2">
                  <p>
                    Utilized TTD to restructure the entire codebase to replace
                    bad testing practices and implement reusability amongst
                    similar components.
                  </p>
                  <p>
                    Built a Lightning Web Component mass transfer tool that
                    enabled supervisors to independently draft, preview, and
                    execute ownership transfers without support intervention.
                    Real-time metrics and rollback capabilities improved trust
                    and usability.
                  </p>
                </Flex>
              </Flex>
              <Flex direction="col">
                <h4 className="text-sm font-black text-gray-500">RECEPTION</h4>
                <Flex className="px-2">
                  <p>
                    The refactor transformed the Salesforce environment from an
                    internal bottleneck, referred to a "nightmare project," into
                    a flexible and testable platform.
                  </p>
                </Flex>
              </Flex>
            </Flex>
          </ProjectCard>
        </Flex>
      </Flex>
    </Flex>
  );
}
