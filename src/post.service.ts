import postRepository, { IPost } from './post.repository';
import cacheService from './cache.service';

const getPosts = async (): Promise<IPost[]> => {
  const cache = await cacheService.getPosts();
  if (cache) {
    console.count('Hit cache');
    return cache;
  }

  console.count('Hit database');
  const posts = await postRepository.getPosts();
  await cacheService.setPosts(posts);

  return posts;
};

export default {
  getPosts,
} as const;
