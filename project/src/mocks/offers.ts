import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: 1,
    img: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    title: 'Beautiful & luxurious studio at great location',
    description:
    'Nullam vehicula urna lacus, a suscipit orci pharetra id. Maecenas facilisis et lorem ut ultrices.',
    isPremium: true,
    type: 'Apartment',
    rating: 3.5,
    bedrooms: 3,
    maxAdults: 4,
    price: 120,
    goods: ['Heating', 'Coffee machine', 'Kitchen', 'Wasching machine', 'Baby seat', 'Dishwasher', 'Wi-Fi', 'Cabel TV'],
    host: {
      id: 1,
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,
    },
    city: {
      location: {
        lng: 4.897976,
        lat: 52.37454,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    location: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
      zoom: 10,
    },
  },
  {
    id: 2,
    img: [
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    title: 'Wood and stone place',
    description:
    'Aliquam a sem et odio volutpat feugiat quis id lorem',
    isPremium: false,
    type: 'Private room',
    rating: 3.5,
    bedrooms: 2,
    maxAdults: 2,
    price: 80,
    goods: ['Wifi', 'Heating', 'Kitchen', 'Wasching machine'],
    host: {
      id: 1,
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: false,
    },
    city: {
      location: {
        lng: 4.897976,
        lat: 52.37454,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    location: {
      lat: 52.3609553943508,
      lng: 4.85309666406198,
      zoom: 10,
    },
  },
  {
    id: 3,
    img: [
      'img/room.jpg'
    ],
    title: 'Canal View Prinsengracht',
    description:
    'Aliquam a sem et odio volutpat feugiat quis id lorem',
    isPremium: false,
    type: 'Apartment',
    rating: 5,
    bedrooms: 1,
    maxAdults: 3,
    price: 130,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Kitchen', 'Wasching machine', 'Fridge', 'Wi-Fi'],
    host: {
      id: 1,
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: false,
    },
    city: {
      location: {
        lng: 4.897976,
        lat: 52.37454,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    location: {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
      zoom: 10,
    },
  },
  {
    id: 4,
    img: ['img/apartment-03.jpg'],
    title: 'Nice, cozy, warm big bed apartment',
    description:
    'Mauris hendrerit eros non varius tempus. Sed a arcu est.',
    isPremium: false,
    type: 'Studio',
    rating: 4.5,
    bedrooms: 2,
    maxAdults: 3,
    price: 180,
    goods: ['Heating', 'Kitchen', 'Cable TV'],
    host: {
      id: 1,
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: false,
    },
    city: {
      location: {
        lng: 4.897976,
        lat: 52.37454,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    location: {
      lat: 52.3809553943508,
      lng: 4.939309666406198,
      zoom: 10,
    },
  },
];
