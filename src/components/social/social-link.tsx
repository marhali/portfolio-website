import { Button } from '@/components/ui/button.tsx';
import type { ComponentProps, ComponentType } from 'react';

export type SocialLinkProperties = {
  name: string;
  href: string;
  icon: ComponentType<ComponentProps<'svg'>>;
};

function SocialLink({ name, href, icon: IconComponent }: Readonly<SocialLinkProperties>) {
  return (
    <Button asChild variant="ghost" size="default" className="text-white" title={name}>
      <a target="_blank" rel="noopener noreferrer" href={href}>
        <IconComponent className="size-6" />
      </a>
    </Button>
  );
}

export default SocialLink;
