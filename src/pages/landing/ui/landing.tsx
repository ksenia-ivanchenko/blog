import { useNavigate } from 'react-router';
import { Button, DetailsIcon, EyeIcon, Input } from '@shared';
// import styles from './landing.module.scss';

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="example-homework">
      <div className="screen">
        <h2>Интересные факты про эту страницу</h2>

        <p>В ней нет смысла</p>
        <Button onClick={() => navigate('#second-screen')}>
          Перейти дальше
          <EyeIcon />
        </Button>
      </div>

      <div
        className="screen"
        id="second-screen"
        style={{ backgroundColor: '#e0e0e0' }}
      >
        <h2>Смотрите какие карточки</h2>
        <div className="cards-container">
          <div className="card">
            <h4>Карточка 1</h4>
            <p>Пустота</p>
          </div>
          <div className="card">
            <h4>Карточка 2</h4> <p>Пустота</p>
          </div>
        </div>
      </div>

      <div className="block">
        <h2>Интерактив?</h2>
        <Input type="text" placeholder="Напишите тут что-нибудь" />
        <Button onClick={() => navigate('#')}>
          Вывести текст в alert
          <DetailsIcon />
        </Button>
      </div>
    </div>
  );
};
