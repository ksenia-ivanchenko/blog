import { useNavigate } from 'react-router';
import { DetailsIcon, EyeIcon } from '@shared';
// import styles from './landing.module.scss';

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="example-homework">
      <div className="screen">
        <h2>Интересные факты про эту страницу</h2>

        <p>В ней нет смысла</p>
        <button onClick={() => navigate('#second-screen')}>
          Перейти дальше
          <EyeIcon />
        </button>
      </div>

      <div
        className="screen"
        id="second-screen"
        style={{ backgroundColor: '#e0e0e0' }}
      >
        <h3>Смотрите какие карточки</h3>
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
        <h5>Интерактив?</h5>
        <input type="text" placeholder="Напишите тут что-нибудь" />
        <button onClick={() => navigate('#')}>
          Вывести текст в alert
          <DetailsIcon />
        </button>
      </div>
    </div>
  );
};
