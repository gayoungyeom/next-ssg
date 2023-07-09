import type { NextPage } from 'next';
import { getAllPosts, getPostBySlug } from '../api';

export type Post = {
  slug: string;
  title: string;
  content: string;
};

const Post: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
};

type Parmas = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params: { slug } }: Parmas) => {
  const post = getPostBySlug(slug, ['slug', 'title']);
  return { props: { post: { ...post } } };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug', 'title']);

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export default Post;
