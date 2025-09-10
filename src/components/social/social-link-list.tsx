import SocialLink, { type SocialLinkProperties } from '@/components/social/social-link.tsx';

type SocialLinkListProperties = {
  items: SocialLinkProperties[];
};

function SocialLinkList({ items }: Readonly<SocialLinkListProperties>) {
  return (
    <div className="flex">
      {items.map((link) => (
        <SocialLink key={link.name} {...link} />
      ))}
    </div>
  );
}

export default SocialLinkList;
