import postRepository, { IPost } from './post.repository';
import cacheService from './cache.service';

let promise: Promise<IPost[]> | null = null;

const getPosts = async (): Promise<IPost[]> => {
  const cache = await cacheService.getPosts();
  if (cache) {
    console.count('Hit cache');
    return cache;
  }

  if (promise) {
    return promise;
  }

  try {
    console.count('Hit database');
    promise = postRepository.getPosts();

    const posts = await promise;
    await cacheService.setPosts(posts);

    return posts;
  } finally {
    promise = null;
  }
};

export default {
  getPosts,
} as const;
