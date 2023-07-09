import type { ReactNode } from 'react';
import GNB from './GNB';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GNB />
      <div>{children}</div>
    </>
  );
};

export default Layout;
