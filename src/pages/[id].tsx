import type { NextPage } from 'next';

export type Post = {
  id: string;
  title: string;
  content: string;
};

const Post: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.title}</div>
    </div>
  );
};

export const getStaticProps = async ({ id }) => {
  const post = { title: '제목1', content: '내용1', id: '1' }; //게시물 하나 가져오기
  return { props: { post: { ...post } } };
};

export const getStaticPaths = async () => {
  const posts = [
    { title: '제목1', content: '내용1', id: '1' },
    { title: '제목2', content: '내용2', id: '2' },
    { title: '제목3', content: '내용3', id: '3' },
  ];

  return {
    paths: posts.map((post) => ({ params: { id: post.id } })),
    fallback: true,
  };
};

export default Post;
