import { getPostApi } from '@entities/post';
import { postsCount } from '../const/const';

export const getRandomPostApi = async () => {
  const randomId = Math.floor(Math.random() * postsCount) + 1;
  try {
    const response = await getPostApi(randomId);
    return response.data;
  } catch (error) {
    console.log(
      `При попытке получить рандомный пост произошла ошибка: ${error}`
    );
    throw error;
  }
};
