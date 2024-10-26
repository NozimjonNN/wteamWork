
// src/pages/Home.js
import React from 'react';
import './hom.css';

const Home = () => (
  <div className="home">
    <header className="header">
      <h1>Засуха в Узбекистане</h1>
      <p>Понимание и действия для борьбы с проблемами засухи</p>
    </header>
    
    <section className="info-section">
      <h2>Что такое засуха?</h2>
      <p>
        Засуха - это период, когда уровень осадков значительно ниже нормального, что приводит к 
        нехватке воды в почве и для сельского хозяйства. Узбекистан сталкивается с этой проблемой 
        из-за изменения климата, неэффективного управления водными ресурсами и других факторов.
      </p>
      <img 
        src="https://storage.kun.uz/source/8/7-XRzE1Fe3FxLI83yvl5_9APiLNVltR2.jpg" 
        alt="Засуха в Узбекистане" 
        className="main-image" 
      />
    </section>

    <section className="factors-section">
      <h2>Факторы, способствующие засухе:</h2>
      <ul>
        <li>Изменение климата</li>
        <li>Неэффективное использование водных ресурсов</li>
        <li>Обезлесение</li>
        <li>Географические особенности</li>
        <li>Загрязнение водоемов</li>
      </ul>
    </section>

    <section className="consequences-section">
      <h2>Последствия засухи:</h2>
      <ul>
        <li>Экономические последствия</li>
        <li>Проблемы со здоровьем</li>
        <li>Социальные последствия</li>
        <li>Экологические последствия</li>
        <li>Долгосрочные последствия</li>
      </ul>
    </section>

    <section className="statistics-section">
      <h2>Статистика:</h2>
      <ul>
        <li>Снижение уровня воды в реках на 25% за последние 20 лет.</li>
        <li>Урожайность основных культур уменьшилась на 15% в последние 5 лет.</li>
        <li>Около 50% сельского населения испытывают нехватку воды.</li>
        <li>До 3 миллионов человек могут столкнуться с продовольственной нехваткой в 2024 году.</li>
      </ul>
    </section>

    <section className="history-section">
      <h2>История борьбы с засухой в Узбекистане:</h2>
      <p>
        Узбекистан имеет долгую историю борьбы с проблемами водоснабжения и засухи. В последние десятилетия 
        правительство и местные сообщества начали внедрять более устойчивые методы управления водными ресурсами.
      </p>
    </section>

    <section className="initiatives-section">
      <h2>Местные инициативы:</h2>
      <ul>
        <li>Проект по восстановлению орошаемых земель</li>
        <li>Образовательные программы для фермеров</li>
        <li>Международное сотрудничество</li>
      </ul>
    </section>

    <section className="image-gallery">
      <h2>Изображения из регионов, пострадавших от засухи:</h2>
      <img 
        src="https://asia24.media/upload/iblock/330/bj2pp1jtx7lkgjda9p0e6i8r2vl3mja9.jpg" 
        alt="Арльское море" 
      />
      <img 
        src="data:image/jpeg;base64,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" 
        alt="Засуха в Узбекистане" 
      />
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGajPT4NVXJ4RXmH4ihfFuZrnuNbpAlqXGlQ&s" 
        alt="Пейзаж во время засухи" 
      />
    </section>
    
    <footer className="footer">
      <h3>Поддержите борьбу с засухой!</h3>
      <a href="https://carececo.org/main/activity/projects/droughtSDS/" className="donate-button">Пожертвовать</a>
    </footer>
  </div>
);

export default Home;
