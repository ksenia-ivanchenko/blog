import { Post } from '../types/post';
import { api } from './client';

export const getPostApi = async (id: number) =>
  await api.get<Post>(`/posts/${id}`);
