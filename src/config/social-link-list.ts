import RiGithubFillIcon from '@/icons/ri-github-fill-icon.svg?react';
import RiLinkedinFillIcon from '@/icons/ri-linkedin-fill-icon.svg?react';
import RiTwitterXFillIcon from '@/icons/ri-twitter-x-fill-icon.svg?react';
import type { SocialLink } from '@/model/social-link.ts';

const socialLinkList: SocialLink[] = [
  {
    name: 'X (formerly Twitter)',
    href: 'https://x.com/marhali.de',
    icon: RiTwitterXFillIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/marhali',
    icon: RiGithubFillIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/marcel-hasslinger/',
    icon: RiLinkedinFillIcon,
  },
];

export default socialLinkList;
