import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';

export const changeCity = createAction('offers/changeCity', (city: City) =>({
  payload: city,
}));

export const addRentOffers = createAction('offers/addRentOffers', (offers: Offer[]) => ({
  payload: offers,
}));
