import { IPost } from './post.repository';

let _posts: IPost[] | null = null;

const getPosts = (): Promise<IPost[] | null> => Promise.resolve(_posts);

const setPosts = (posts: IPost[]): Promise<void> => {
  _posts = posts;

  return Promise.resolve();
};

export default {
  getPosts,
  setPosts,
} as const;
