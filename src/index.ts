import express from 'express';
import postService from './post.service';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/posts', async (req, res) => {
  res.json({ posts: await postService.getPosts() });
});

app.listen(3000, () => {
  console.log('Server is listening on :3000');
});
