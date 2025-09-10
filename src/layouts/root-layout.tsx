import ProfilePicture from '@/components/profile-picture.tsx';
import SocialLinkList from '@/components/social/social-link-list.tsx';
import socialLinkList from '@/config/social-link-list.ts';
import type { PropsWithChildren } from 'react';

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid h-full min-h-screen w-full grid-cols-1 gap-4 py-12 lg:grid-cols-2 xl:px-52 2xl:px-72">
      <div className="flex h-full flex-col items-center justify-center">
        <ProfilePicture />
        <h2 className="mt-4 text-2xl font-bold">Marcel Haßlinger</h2>
        <h3 className="mb-2">Frankfurt / Main, Germany</h3>
        <SocialLinkList items={socialLinkList} />
      </div>
      <div className="flex h-full flex-col items-center justify-center">{children}</div>
    </div>
  );
}

export default RootLayout;
