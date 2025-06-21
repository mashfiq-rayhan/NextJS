import { useLoaderData } from 'react-router-dom';

import Post from './Post';
import classes from './PostsList.module.css';

export default function PostList() {
  const posts = useLoaderData();


  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    setPosts((prevPosts) => [postData, ...prevPosts]);
  }
  console.log(posts);

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.content} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}

    </>
  );
}
