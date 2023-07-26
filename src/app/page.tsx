import { getAllPosts } from '../api';
import PostBoxes from '../components/PostBoxes';
import type { NextPage } from 'next';
import type { Post } from './[slug]/page';

const Home: NextPage = () => {
  const posts = getAllPosts([
    'slug',
    'title',
    'author',
    'preview',
    'date',
  ]) as Post[];

  return <PostBoxes posts={posts} />;
};

export default Home;
