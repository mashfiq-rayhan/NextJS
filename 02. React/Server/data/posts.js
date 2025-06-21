import { readFile, writeFile } from 'node:fs/promises';

export async function getStoredPosts() {
  const rawFileContent = await readFile('posts.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedPosts = data.posts ?? [];
  return storedPosts;
}

export function storePosts(posts) {
  return writeFile('posts.json', JSON.stringify({ posts: posts || [] }));
}
