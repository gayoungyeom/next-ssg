import Link from 'next/link';
import { styled } from 'styled-components';

interface Navs {
  title: string;
  link: string;
}

const navs: Navs[] = [{ title: 'HOME', link: '/' }];

const GNB = () => {
  return (
    <Nav>
      {navs.map((nav) => (
        <Link href={nav.link} key={nav.title}>
          <Text>{nav.title}</Text>
        </Link>
      ))}
    </Nav>
  );
};

export default GNB;

const Nav = styled.nav`
  display: flex;
  padding: 20px 0;
  border-bottom: 2px solid #000;
`;

const Text = styled.div`
  font-size: 28px;
  font-weight: 800;
  margin: 0 5px;
`;
