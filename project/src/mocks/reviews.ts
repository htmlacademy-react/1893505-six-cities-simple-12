import { ReviewType } from '../types/review';

export const reviews: ReviewType[] = [
  {
    id: 1,
    comment: 'A quiet cozy and picturesque that hides behind a river by the unique lightness. The building is green and from 18th century.',
    date: 'Thu Apr 10 2022 09:56:10 GMT+0300 (Москва, стандартное время)',
    rating: 5,
    user: {
      id: 1,
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Sara',
    },
  },
  {
    id: 2,
    comment: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    date: 'Mon Mar 02 2019 10:26:10 GMT+0300 (Москва, стандартное время)',
    rating: 3,
    user: {
      id: 2,
      avatarUrl: 'img/avatar-max.jpg',
      name: 'Max',
    },
  },
  {
    id: 3,
    comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: 'Thu Apr 22 2020 15:56:10 GMT+0300 (Москва, стандартное время)',
    rating: 5,
    user: {
      id: 3,
      avatarUrl: 'img/avatar-max.jpg',
      name: 'John',
    },
  },
  {
    id: 4,
    comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'Mon Feb 19 2022 11:19:10 GMT+0300 (Москва, стандартное время)',
    rating: 4,
    user: {
      id: 4,
      avatarUrl: 'img/avatar-max.jpg',
      name: 'Sam',
    },
  },
  {
    id: 5,
    comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'Sun Oct 04 2021 12:31:10 GMT+0300 (Москва, стандартное время)',
    rating: 4.5,
    user: {
      id: 5,
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Jane',
    },
  },
  {
    id: 6,
    comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: 'Sat Jun 12 2020 10:55:10 GMT+0300 (Москва, стандартное время)',
    rating: 3.5,
    user: {
      id: 6,
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Anna',
    },
  },
  {
    id: 7,
    comment: 'Congue nisi vitae suscipit tellus mauris a diam maecenas sed.',
    date: 'Fri May 02 2021 20:53:10 GMT+0300 (Москва, стандартное время)',
    rating: 3.5,
    user: {
      id: 7,
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Kate',
    },
  },
];
