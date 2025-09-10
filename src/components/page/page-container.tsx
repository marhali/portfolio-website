import type { PropsWithChildren, ReactNode } from 'react';

type PageProperties = PropsWithChildren & {
  heading: ReactNode;
};

function PageContainer({ heading, children }: Readonly<PageProperties>) {
  return (
    <div className="w-full space-y-5 px-6 md:px-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">{heading}</h1>
      {children}
    </div>
  );
}

export default PageContainer;
