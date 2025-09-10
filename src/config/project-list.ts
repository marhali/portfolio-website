import type { Project } from '@/model/project.ts';

export const projectList: Project[] = [
  {
    status: 'ACTIVE',
    name: 'easy-i18n',
    title: 'easy-i18n',
    description:
      "IDE plugin based on JetBrains's IntelliJ Platform that makes internationalization (i18n) easy. Facilitates UI-supported capture and management of translations for your application. Supports various file types and customizations.",
    socials: [
      { name: 'Repository', href: 'https://github.com/marhali/easy-i18n' },
      { name: 'JetBrains Marketplace', href: 'https://plugins.jetbrains.com/plugin/16316-easy-i18n' },
    ],
  },
  {
    status: 'ACTIVE',
    name: 'json5-java',
    title: 'json5-java',
    description: 'This is a lightweight library to parse and serialize JSON5 data in Java 11+.',
    socials: [
      { name: 'Repository', href: 'https://github.com/marhali/json5-java' },
      { name: 'Maven Central', href: 'https://central.sonatype.com/artifact/de.marhali/json5-java' },
      { name: 'javadoc.io', href: 'https://javadoc.io/doc/de.marhali/json5-java' },
    ],
  },
  {
    status: 'ACTIVE',
    name: 'depjack',
    title: 'depjack',
    description:
      'Fully typed dependency injection library for your next enterprise-grade TypeScript project with zero dependencies.',
    socials: [
      { name: 'Repository', href: 'https://github.com/marhali/depjack' },
      { name: 'npm - @depjack/core', href: 'https://www.npmjs.com/package/@depjack/core' },
      { name: 'npm - @depjack/react', href: 'https://www.npmjs.com/package/@depjack/react' },
    ],
  },
  {
    status: 'ACTIVE',
    name: 'gitlab-mr-labeler',
    title: 'gitlab-mr-labeler',
    description:
      'Automation of label assignment for GitLab merge requests. Solves the problem of missing automation of labeling merge requests in GitLab. Based on merge request pipelines, labels are automatically assigned using various configuration options.',
    socials: [
      { name: 'Repository', href: 'https://github.com/marhali/gitlab-mr-labeler' },
      { name: 'Docker Hub', href: 'https://hub.docker.com/r/marhali/gitlab-mr-labeler' },
    ],
  },
  {
    status: 'ACTIVE',
    name: 'microservice-spa-starter',
    title: 'microservice-spa-starter',
    description:
      'Starter project to develop your next large application based on a microservice architecture with a single-page-application utilizing the backend-for-frontend pattern.',
    socials: [{ name: 'Repository', href: 'https://github.com/marhali/microservice-spa-starter' }],
  },
  {
    status: 'ARCHIVE',
    name: 'ocean-pearl',
    title: 'Ocean Pearl',
    description: 'Open Source project tracker for the Ocean Protocol ecosystem.',
    socials: [
      { name: 'Frontend Repository', href: 'https://github.com/ocean-tech-ship/ocean-pearl' },
      { name: 'Backend Repository', href: 'https://github.com/ocean-tech-ship/ocean-pearl-api' },
    ],
  },
];

export const projectListByStatusActive = projectList.filter((item) => item.status === 'ACTIVE');
export const projectListByStatusArchive = projectList.filter((item) => item.status === 'ARCHIVE');
export const projectByName = (name: string) => projectList.find((item) => item.name === name);
