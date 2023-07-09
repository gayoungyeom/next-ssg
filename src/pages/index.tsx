import Link from 'next/link';
import { getAllPosts } from '../api';
import type { NextPage } from 'next';
import type { Post } from './[slug]';

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <li key={`${post.title}-${index}`}>
            <Link href={`/${post.slug}`} key={post.slug}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = () => {
  const posts = getAllPosts(['slug', 'title']);
  return { props: { posts } };
};

export default Home;
