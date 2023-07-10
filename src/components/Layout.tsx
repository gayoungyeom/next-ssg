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
  width: 1024px;
  margin: 0 auto;
  border: 2px solid orange;
`;
