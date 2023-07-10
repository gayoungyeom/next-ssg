import Link from 'next/link';
import { styled } from 'styled-components';
import { Post } from '../pages/[slug]';

interface PostBoxProps {
  post: Post;
}

const PostBox = ({ post }: PostBoxProps) => {
  return (
    <Container>
      <PostLink href={`/${post.slug}`} key={post.slug}>
        <Title>{post.title}</Title>
        <div>
          <AuthorDate>{post.author}</AuthorDate>
          <AuthorDate>{post.date}</AuthorDate>
        </div>
      </PostLink>
    </Container>
  );
};

export default PostBox;

const Container = styled.li`
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  border-bottom: 2px solid rgba(0, 27, 55, 0.1);
  &:hover {
    background-color: rgba(214, 214, 214, 0.1);
  }
`;

const PostLink = styled(Link)`
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const AuthorDate = styled.div`
  font-size: 14px;
  color: #757575;
  line-height: 1.5;
`;
