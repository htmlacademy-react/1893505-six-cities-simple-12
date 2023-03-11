export type Offer = {
  id: number;
  img: string;
  isPremium: boolean;
  price: number;
  title: string;
  type: string;
  rating: number;
};

export const offers = [
  {
    id: 1,
    img: 'img/apartment-01.jpg',
    isPremium: true,
    price: 120,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    rating: 3.5,
  },
  {
    id: 2,
    img: 'img/room.jpg',
    isPremium: false,
    price: 80,
    title: 'Wood and stone place',
    type: 'Private room',
    rating: 5,
  },
  {
    id: 3,
    img: 'img/apartment-02.jpg',
    isPremium: false,
    price: 132,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    rating: 5,
  },
  {
    id: 4,
    img: 'img/apartment-03.jpg',
    isPremium: true,
    price: 180,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    rating: 5,
  },
];
