import { useState } from 'react';
import { Button, Post } from '@shared';
import { getRandomPostApi } from '../api/get-random-post';
import { PostHeading } from '@entities';
import styles from './get-random-post.module.scss';

export const GetRandomPost = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleGetPost = async () => {
    try {
      setLoading(true);
      const post = await getRandomPostApi();
      setPost(post);
      setError('');
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.content}>
      {error && <span>{error}</span>}
      {post ? (
        <PostHeading>{post.title}</PostHeading>
      ) : (
        <Button onClick={handleGetPost} className={styles.button}>
          {loading ? 'Получаем...' : 'Получить пост'}
        </Button>
      )}
    </div>
  );
};
