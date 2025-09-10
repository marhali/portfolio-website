/** Indicates whether this project is actively maintained or not. */
export type ProjectStatus = 'ACTIVE' | 'ARCHIVE';

/** Reference to a project social. */
export type ProjectSocial = {
  name: string;
  href: string;
};

/** Represents a portfolio project item. */
export type Project = {
  status: ProjectStatus;
  name: string;
  title: string;
  description: string;
  socials: ProjectSocial[];
};
