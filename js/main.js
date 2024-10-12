/*description, строка — описание фотографии. Описание придумайте самостоятельно.*/
const DESCRIPTIONS = [
  'Горячая пора!',
  'Прекрасно!',
  'Круто!',
  'Зацените!',
  'Огонь!',
  'Замечательно!',
  'Вот это да!',
  'Прикол!',
];

/*Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:*/
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

/*Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.*/
const NAMES = [
  'Джек',
  'Илон',
  'Марк',
  'Макс',
  'Джеймс',
  'Петр',
];

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const SIMILAR_OBJECTS_COUNT = 25;

const getRandomElement = (data) => data[getRandomInteger(0, data.length - 1)];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getUniqueRandom = (a, b) => {
  const uniqueItems = [];
  return () => {
    if (uniqueItems.length > Math.abs(a - b)) {
      return;
    }
    let unique = getRandomInteger(a, b);
    while (uniqueItems.includes(unique)) {
      unique = getRandomInteger(a, b);
    }
    uniqueItems.push(unique);
    return unique;
  }
}

const getCounter = () => {
  let counter = 0;
  return () => {
    counter = counter + 1;
    return counter;
  }
};

const uniqueId = getCounter();
const uniquePhoto = getUniqueRandom(1, 25);

const createComment = () => ({
  id: getRandomInteger(1, 2000),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

const createPhoto = () => ({
  id: uniqueId(),
  url: `photos/${uniquePhoto()}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({ length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS) }, createComment)
});


const photos = Array.from({ length: SIMILAR_OBJECTS_COUNT }, createPhoto);

console.log(photos);
