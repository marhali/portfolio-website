import type { ComponentProps, ComponentType } from 'react';

/** References a social link with icon. */
export type SocialLink = {
  name: string;
  href: string;
  icon: ComponentType<ComponentProps<'svg'>>;
};
