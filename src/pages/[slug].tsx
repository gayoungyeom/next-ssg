import type { NextPage } from 'next';
import { getAllPosts, getPostBySlug } from '../api';
import markdownToHtml from '../utils';

export type Post = {
  slug: string;
  title: string;
  author: string;
  preview: string;
  date: string;
  content: string;
};

const Post: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
};

type Parmas = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params: { slug } }: Parmas) => {
  const post = getPostBySlug(slug, ['slug', 'title', 'content']);
  const content = await markdownToHtml(post.content);

  return { props: { post: { ...post, content } } };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug', 'title']);

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export default Post;
