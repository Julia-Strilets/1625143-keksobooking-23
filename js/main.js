// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomNumberInt(min, max) {
  if (min < 0 || max < 0) {
    return 'Вы ввели отрицательное число';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumberFloat(min, max, toFixed = 2) {
  if (min < 0 || max < 0) {
    return 'Вы ввели отрицательное число';
  }
  return ((Math.random() * (max - min + 1)) + min).toFixed(toFixed);
}

getRandomNumberInt(0, 0);
getRandomNumberFloat(3,156);

const AUTOR = {
  avatar : [
    'img/avatars/user01.png',
    'img/avatars/user02.png',
    'img/avatars/user03.png',
    'img/avatars/user04.png',
    'img/avatars/user05.png',
    'img/avatars/user06.png',
    'img/avatars/user07.png',
    'img/avatars/user08.png',
    'img/avatars/user09.png',
    'img/avatars/user10.png',
    'img/avatars/user11.png',
  ],
};

const OFFER = {
  title : 'Привет, Вы готовы выбрать жилье',
  address : '{{location.lat}}, {{location.lng}}',
  price : getRandomNumberInt(100, 8000),
  type : 'flat',
  rooms : getRandomNumberInt(1, 5),
  guests: getRandomNumberInt(1, 5),
  checkin : '14:00',
  checkout : '12:00',
  features : ['wifi', 'dishwasher', 'parking', 'washer', 'elevator','conditioner'],
  description : 'шикароная квартира с видом на горы',
  photos : [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ],
};

const LOCATION = {
  lat : getRandomNumberFloat(35.650000, 35.70000, 5),
  lang: getRandomNumberFloat(139.70000, 139.80000, 5),
};

function createAdvertisement() {
  return {
    avatar: AUTOR.avatar[getRandomNumberInt(0, AUTOR.avatar.length - 1)],
    title: OFFER.title,
    address: OFFER.address,
    price: OFFER.price,
    type: OFFER.type,
    rooms:  OFFER.rooms,
    guests: OFFER.guests,
    checkin: OFFER.checkin,
    checkout: OFFER.checkout,
    features: OFFER.features[getRandomNumberInt(0, OFFER.features.length - 1)],
    description: OFFER.description,
    photos: OFFER.photos[getRandomNumberInt(0, OFFER.photos.length - 1)],
    lat: +LOCATION.lat,
    lang: +LOCATION.lang,
  };
}
createAdvertisement();
