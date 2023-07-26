'use client';

import type { ReactNode } from 'react';
import GNB from './GNB';
import { styled } from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <GNB />
      <div>{children}</div>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 0 16px;
`;
