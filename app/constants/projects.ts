import { Technologies } from './technologies';

export const ProjectDetails = Object.freeze({
  featured: {
    id: 'knowledgeBase',
    title: 'Internal Knowledge Base Platform',
    technologies: [
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
      Technologies.S3,
      Technologies.CodePipeline,
      Technologies.CodeBuild
    ],
    summary:
      'Led the development of a modernized replacement system for a legacy internal knowledge base, which was gaining widespread disregard and discontent from the over 200 employees. This initiative delivered significant improvements to content delivery through a robust frontend architecture designed to address the three major concerns of users—lack of visibility, lack of searchability, and lack of accessibility—and maximize publishing efficiency through a personalized CMS platform.',
    details: [
      'As an independent developer, I assumed full ownership of the product—from architectural design to deployment techniques and strategies. I mentored a developing UX designer in foundational design principles and collaborated closely on Figma prototypes, prioritizing user accessibility needs for stakeholder approval.',
      "Given the project's rapid delivery requirement, my architectural approach for the platform's frontend focused on flexibility and familiarity—utilizing my React and TypeScript experience, I established a strong, type-safe foundation, ensuring long-term maintainability. I developed a responsive UI using Tailwind CSS to allow users to interact with the app according to their preferences. For a flexible, quickly iterable reactive state, I decided on MobX. To handle the heavy API dependency of a headless CMS and the desire for curated department-based content, I implemented Zod for its TypeScript-first schema declaration and validation. Zod's convenient runtime data manipulation bridged the gaps between content management and delivery.",
      'The second half of this project involved designing and implementing a Sanity CMS studio. I proposed and campaigned for Sanity as our CMS, as its unrivaled customizability was essential to handle hard-coded and non-traditionally structured content found in the legacy system. I took full advantage of this customizability to develop clear workflows and content models that simplified complex editorial processes and eliminated manual coding, resulting in a reduction of at least 75% in content publishing time.',
      "The platforms were containerized with Docker and deployed to AWS Fargate with AWS CodePipeline and CodeBuild serving as the primary CI/CD automation tools. While these deployment techniques were part of the company's standard serverless deployment strategy, I further adapted this pattern to engineer a multi-environment strategy, leveraging custom load-balancing rules, enabling the hosting of both the studio and the head in the same service as separate containers."
    ],
    reception:
      'This platform delivered significant, measurable impact. Content managers experienced an estimated 90% increase in overall publishing efficiency through the elimination of manual coding and the implementation of standardized design principles. Furthermore, user adoption surged dramatically by an estimated hundredfold due to curated departmental content delivery, the much-anticipated searchability capabilities, and its intuitive, user-friendly design—key complaints that led to the widespread disregard of the legacy system.'
  },
  others: [
    {
      id: 'notificationService',
      title: 'Notification Microservice',
      technologies: [
        Technologies.Node,
        Technologies.Express,
        Technologies.Lambda,
        Technologies.MongoDB,
        Technologies.Mongoose,
        Technologies.Twilio,
        Technologies.Figma
      ],
      summary:
        'Collaborated with developers and architects on a serverless application. Owned the notification service and designed a database access layer using MongoDB and Mongoose and an event-driven API in AWS Lambda.',
      details: [
        'Integrated Twilio to handle dynamic, personalized email and SMS communication. Deployed each operation as an isolated AWS Lambda function, enabling fine-grained observability, scalability, and maintainability. Charted event flows and documented handler triggers to improve clarity and support ongoing development.',
        'Improved initially provided UX through adjustments in Figma based on client feedback. Prototyped those static UX designs for early user access testing.'
      ],
      reception:
        "Through my contributions to the UX prototype, the app's pitch outperformed competitors in securing mobility tech contracts. Focus groups praised the app's clarity and accessibility."
    },
    {
      id: 'salesforceDev',
      title: 'Salesforce Tooling/Optimization',
      technologies: [Technologies.Salesforce, Technologies.LWC],
      summary:
        'Redesigned a legacy Salesforce codebase by introducing the modular patterns, a robust TTD framework, and operational tooling to improve maintainability and resilience.',
      details: [
        'Utilized TTD to restructure the entire codebase to replace bad testing practices and implement reusability amongst similar components.',
        'Built a Lightning Web Component mass transfer tool that enabled supervisors to independently draft, preview, and execute ownership transfers without support intervention. Real-time metrics and rollback capabilities improved trust and usability.'
      ],
      reception:
        'The refactor transformed the Salesforce environment from an internal bottleneck, referred to a "nightmare project," into a flexible and testable platform.'
    }
  ]
});
