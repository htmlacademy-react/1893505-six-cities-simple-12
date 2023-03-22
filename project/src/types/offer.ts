export type Offer = {
  id: number;
  img: string[];
  description: string;
  isPremium: boolean;
  bedrooms: number;
  price: number;
  title: string;
  type: string;
  rating: number;
  maxAdults: number;
  goods: string[];
  host: {
    id: number;
    avatarUrl: string;
    name: string;
    isPro: boolean;
  };
  city: {
    location: {
      lat: number;
      lng: number;
      zoom: number;
    };
    name: string;
  };
  location: {
    lat: number;
    lng: number;
    zoom: number;
  };
};
