// src/routes/__root.tsx
/// <reference types="vite/client" />
import { Outlet, createRootRoute, HeadContent, Scripts } from '@tanstack/react-router';
import RootLayout from '@/layouts/root-layout.tsx';
import appCss from '@/styles/app.css?url';
import type { ReactNode } from 'react';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'marhali.de | portfolio',
      },
      // OG Tags
      {
        property: 'og:title',
        content: 'marhali.de | portfolio',
      },
      {
        property: 'og:description',
        content:
          'Hello my name is Marcel, I am an experienced software and systems engineer. I love working on new projects to keep developing myself.',
      },
      {
        property: 'og:type',
        content: 'profile',
      },
      {
        property: 'og:image',
        content: 'https://marhali.de/imgs/profile.png',
      },
    ],
    links: [
      {
        rel: 'shortcut icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => '404 - Not Found',
});

function RootComponent() {
  return (
    <RootDocument>
      <RootLayout>
        <Outlet />
      </RootLayout>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <body className="dark bg-background text-foreground">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
