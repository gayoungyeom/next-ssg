'use client';

import PostBox from '../components/PostBox';
import { styled } from 'styled-components';
import type { Post } from '../app/[slug]/page';

interface PostBoxesProps {
  posts: Post[];
}

const PostBoxes = ({ posts }: PostBoxesProps) => {
  return (
    <Boxes>
      {posts.map((post, index) => (
        <PostBox key={`${post.title}-${index}`} post={post} />
      ))}
    </Boxes>
  );
};

export default PostBoxes;

const Boxes = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
