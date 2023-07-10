import { getAllPosts } from '../api';
import type { NextPage } from 'next';
import type { Post } from './[slug]';
import PostBox from '../components/PostBox';
import { styled } from 'styled-components';

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div>
      <PostBoxes>
        {posts.map((post, index) => (
          <PostBox key={`${post.title}-${index}`} post={post} />
        ))}
      </PostBoxes>
    </div>
  );
};

export const getStaticProps = () => {
  const posts = getAllPosts(['slug', 'title', 'author', 'preview', 'date']);
  return { props: { posts } };
};

export default Home;

const PostBoxes = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
