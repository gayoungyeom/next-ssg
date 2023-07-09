import Link from 'next/link';
import type { NextPage } from 'next';
import type { Post } from './[id]';

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <li key={`${post.title}-${index}`}>
            <Link href={`/${post.id}`} key={post.id}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = [
    { title: '제목1', content: '내용1', id: '1' },
    { title: '제목2', content: '내용2', id: '2' },
    { title: '제목3', content: '내용3', id: '3' },
  ];

  return { props: { posts } };
};

export default Home;
