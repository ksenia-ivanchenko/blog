import { api } from '@shared';
import { Post } from '../types/types';

export const getPostApi = async (id: number) =>
  await api.get<Post>(`/posts/${id}`);
