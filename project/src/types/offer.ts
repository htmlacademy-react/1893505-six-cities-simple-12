export type Offer = {
  id: number;
  images: string[];
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
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};
