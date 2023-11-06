"use strict";

function initQualityArr() {
  const list = document.querySelector('[data-repeat="quality-list"]');
  const qualityArr = [
    {
      icon: 'telescope',
      title: '1 Ищи єтот єлемент в файле ./js/scrpits.js',
      text: 'Discover new tastes, flavours, snacks and recipes to make wonderful meals. Also find out where your food comes from and who makes it.',
    },
    {
      icon: 'telescope',
      title: '2 Ищи єтот єлемент в файле ./js/scrpits.js',
      text: 'Discover new tastes, flavours, snacks and recipes to make wonderful meals. Also find out where your food comes from and who makes it.',
    },
    {
      icon: 'telescope',
      title: '3 Ищи єтот єлемент в файле ./js/scrpits.js',
      text: 'Discover new tastes, flavours, snacks and recipes to make wonderful meals. Also find out where your food comes from and who makes it.',
    },
    {
      icon: 'telescope',
      title: '4 Ищи єтот єлемент в файле ./js/scrpits.js',
      text: 'Discover new tastes, flavours, snacks and recipes to make wonderful meals. Also find out where your food comes from and who makes it.',
    },
    {
      icon: 'telescope',
      title: '5 Ищи єтот єлемент в файле ./js/scrpits.js',
      text: 'Discover new tastes, flavours, snacks and recipes to make wonderful meals. Also find out where your food comes from and who makes it.',
    }
  ];

  if (!qualityArr || !list) { 
    return;
  }

  qualityArr.forEach((item) => {
    const card = `
    <li>
      <div class="quality-card">
        <div class="quality-card-picture">
          <svg width="48" height="48">
            <use href="./images/sprite.svg#${item.icon}" />
          </svg>
        </div>
        <div class="quality-card-content">
          <h3 class="quality-card-title">${item.title}</h3>
          <p class="quality-card-text">${item.text}</p>
        </div>
      </div>
    </li>`
    list.insertAdjacentHTML('beforeend', card);
  });
}

initQualityArr();