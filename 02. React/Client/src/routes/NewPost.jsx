import { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './NewPost.module.css';

export default function NewPost({ onAddPost }) {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  function contentChangeHandler(event) {
    setContent(event.target.value);
  }

  function authorChangeHandler(event) {
    setAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = { content, author };
    onAddPost(postData);
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            required
            rows={3}
            onChange={contentChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}
