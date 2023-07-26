import { getAllPosts, getPostBySlug } from '../../api';
import markdownToHtml from '../../utils';

export type Post = {
  slug: string;
  title: string;
  author: string;
  preview: string;
  date: string;
  content: string;
};

interface PostProps {
  params: {
    slug: string;
  };
}

export const generateStaticParams = () => {
  const posts = getAllPosts(['slug']);
  return posts.map((post) => ({ slug: post.slug }));
};

const Post = async ({ params: { slug } }: PostProps) => {
  const post = getPostBySlug(slug, ['slug', 'title', 'content']);
  const content = await markdownToHtml(post.content);

  return (
    <>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

export default Post;
