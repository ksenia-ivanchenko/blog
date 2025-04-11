import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { articleAPI } from '@entities/article';
import { Button, Input, routes, Select } from '@shared';
// import styles from './create-article.module.scss';

const createFormSchema = z.object({
  title: z
    .string()
    .min(1, 'Название обязательно')
    .max(100, 'Слишком длинное название'),
  type: z.enum(['draft', 'published']).optional(),
  description: z
    .string()
    .min(10, 'Описание слишком короткое')
    .max(1000, 'Описание слишком длинное'),
  isNew: z.boolean().optional(),
});

type CreateFormValues = z.infer<typeof createFormSchema>;

export const CreateArticle = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateFormValues>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      title: '',
      type: 'draft',
      isNew: false,
    },
  });

  const navigate = useNavigate();

  const { status, mutate } = useMutation({
    mutationFn: articleAPI.createArticle,
    onSuccess: () => {
      navigate(routes.articles.getLink());
    },
  });

  const submitHandler = handleSubmit((data: CreateFormValues) => {
    mutate({
      title: data.title,
      content: {
        type: data.type,
        description: data.description,
        isNew: data.isNew,
      },
    });
  });

  return (
    <div>
      <h1>Создать статью</h1>
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          {...register('title')}
          error={errors.title?.message}
          label="Название"
        />

        <Select
          label="Тип статьи"
          options={[
            { label: 'Черновик', value: 'draft' },
            { label: 'Опубликовано', value: 'published' },
          ]}
          {...register('type')}
          error={errors.type?.message}
        />

        <Input
          type="textarea"
          {...register('description')}
          error={errors.description?.message}
          label="Описание"
        />
        <Select
          label="Новая запись?"
          options={[
            { label: 'Нет', value: 'false' },
            { label: 'Да', value: 'true' },
          ]}
          error={errors.isNew?.message}
          onChange={(e) => setValue('isNew', e.target.value === 'true')}
        />

        <Button
          type="submit"
          disabled={status === 'pending'}
          style={{ marginTop: '8px' }}
        >
          {status === 'pending' ? 'Создание' : 'Создать'}
        </Button>
      </form>
    </div>
  );
};
