import { getPostApi } from '@entities';

export const getRandomPostApi = async () => {
  const randomId = Math.floor(Math.random() * 100) + 1;
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
