
import React from 'react';
import './hom.css'; 

const Home = () => (
  <div className="home">
    <h1>Засуха в Узбекистане</h1>
    <p>
      Засуха оказывает значительное влияние на сельское хозяйство, экологию и население Узбекистана. 
      На данный момент более 30% территории страны подвержены воздействию засухи. 
      Эта проблема требует внимания и действий как на местном, так и на международном уровнях.
    </p>
    
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

    <h2>Факторы, способствующие засухе:</h2>
    <ul>
      <li><strong>Изменение климата:</strong> Глобальное потепление приводит к увеличению температуры и изменению режима осадков.</li>
      <li><strong>Неэффективное использование водных ресурсов:</strong> Переизбыток водозабора для сельского хозяйства и отсутствие современных технологий орошения.</li>
      <li><strong>Обезлесение:</strong> Вырубка лесов и снижение зеленых насаждений ухудшают климатические условия.</li>
      <li><strong>Географические особенности:</strong> Узбекистан находится в засушливой зоне, что делает его особенно уязвимым.</li>
      <li><strong>Загрязнение водоемов:</strong> Промышленность и сельское хозяйство вносят вклад в загрязнение источников воды.</li>
    </ul>

    <h2>Последствия засухи:</h2>
    <ul>
      <li><strong>Экономические последствия:</strong> Снижение урожайности приводит к убыткам в сельском хозяйстве, что влияет на экономику страны.</li>
      <li><strong>Проблемы со здоровьем:</strong> Недостаток воды влияет на санитарные условия и может привести к распространению заболеваний.</li>
      <li><strong>Социальные последствия:</strong> Миграция населения из затронутых регионов в поисках лучших условий жизни.</li>
      <li><strong>Экологические последствия:</strong> Потеря биоразнообразия и деградация экосистем, включая высыхание рек и озер.</li>
      <li><strong>Долгосрочные последствия:</strong> Увеличение конфликтов из-за дефицита ресурсов и ухудшение условий жизни населения.</li>
    </ul>

    <h2>Статистика:</h2>
    <ul>
      <li>Снижение уровня воды в реках на 25% за последние 20 лет.</li>
      <li>Урожайность основных культур уменьшилась на 15% в последние 5 лет.</li>
      <li>Около 50% сельского населения испытывают нехватку воды.</li>
      <li>По оценкам, до 3 миллионов человек могут столкнуться с продовольственной нехваткой в 2024 году.</li>
      <li>В некоторых регионах уровень грунтовых вод упал до критически низких значений.</li>
    </ul>

    <h2>История борьбы с засухой в Узбекистане:</h2>
    <p>
      Узбекистан имеет долгую историю борьбы с проблемами водоснабжения и засухи. В 1960-х годах 
      началось масштабное орошение сельскохозяйственных земель, что привело к значительному 
      увеличению урожайности, но также привело к истощению водных ресурсов и ухудшению экологии.
    </p>
    <p>
      В последние десятилетия правительство и местные сообщества начали внедрять более устойчивые 
      методы управления водными ресурсами, включая технологии капельного орошения и восстановление 
      экосистем.
    </p>

    <h2>Современные технологии и методы управления водными ресурсами:</h2>
    <ul>
      <li><strong>Капельное орошение:</strong> Эффективная технология, которая позволяет сократить потребление воды до 50% по сравнению с традиционными методами.</li>
      <li><strong>Системы сбора дождевой воды:</strong> Установка систем для сбора и хранения дождевой воды для дальнейшего использования.</li>
      <li><strong>Умные технологии:</strong> Использование датчиков и IoT для мониторинга уровня влаги в почве и управления поливом.</li>
      <li><strong>Реставрация экосистем:</strong> Проекты по восстановлению естественных экосистем для улучшения состояния окружающей среды.</li>
    </ul>

    <h2>Актуальные исследования и новости:</h2>
    <ul>
      <li>
        <a href="https://www.vsemirnyjbank.org/ru/news/press-release/2023/11/21/uzbekistan-ccdr" target="_blank" rel="noopener noreferrer" className="link">
          Исследование по воздействию изменения климата на Узбекистан (2023)
        </a>
      </li>
      <li>
        <a href="https://sectormedia.ru/news/nauka-selskoe-khozyaystvo/pitanie-i-zashchita-rasteniy-v-zasukhu-kak-sokratit-poteri-urozhaya/" target="_blank" rel="noopener noreferrer" className="link">
          Анализ засухи и ее влияние на сельское хозяйство (2023)
        </a>
      </li>
      <li>
        <a href="https://gov.uz/ru/eco/news/view/23975" target="_blank" rel="noopener noreferrer" className="link">
          Последние новости о мерах борьбы с засухой в Узбекистане
        </a>
      </li>
    </ul>

    <h2>Местные инициативы:</h2>
    <p>В последние годы в Узбекистане запущены различные проекты, направленные на борьбу с засухой:</p>
    <ul>
      <li><strong>Проект по восстановлению орошаемых земель:</strong> Восстановление систем орошения и внедрение водосберегающих технологий.</li>
      <li><strong>Образовательные программы:</strong> Программы для фермеров по эффективному использованию ресурсов и адаптации к климатическим изменениям.</li>
      <li><strong>Международное сотрудничество:</strong> Узбекистан активно сотрудничает с международными организациями для разработки и внедрения устойчивых практик управления водными ресурсами.</li>
    </ul>

    <h2>Изображения из регионов, пострадавших от засухи:</h2>
    <div className="image-gallery">
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
    </div>
  </div>
);

export default Home;


