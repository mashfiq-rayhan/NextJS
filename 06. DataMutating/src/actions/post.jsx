'use server';

import { redirect } from 'next/navigation';

import { storePost } from '@/lib/posts';
import { uploadImage } from '@/lib/cloudinary';
import { revalidatePath } from 'next/cache';
import { updatePostLikeStatus } from '@/lib/posts';

export async function createPost(prevState, formData) {
  const title = formData.get('title');
  const image = formData.get('image');
  const content = formData.get('content');

  let errors = [];
  if (!title || title.trim().length === 0) {
    errors.push('Title is required.');
  }
  if (!content || content.trim().length === 0) {
    errors.push('Content is required.');
  }
  if (!image || image.size === 0) {
    errors.push('Image is required.');
  }

  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error(
      'Image Upload Failed, Post was not created. Please try again later.'
    );
  }

  if (errors.length > 0) {
    return { errors };
  }

  await storePost({ imageUrl, title, content, userId: 1 });

  redirect('/feed');
  revalidatePath('/', 'layout');
}


export async function togglePostLikeStatus(postId) {
  await updatePostLikeStatus(postId, 2);
  revalidatePath('/', 'layout');
}
