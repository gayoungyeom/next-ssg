import Link from 'next/link';

interface Navs {
  title: string;
  link: string;
}

const navs: Navs[] = [{ title: 'Home', link: '/' }];

const GNB = () => {
  return (
    <nav>
      {navs.map((nav) => (
        <Link href={nav.link} key={nav.title}>
          {nav.title}
        </Link>
      ))}
    </nav>
  );
};

export default GNB;
