import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../mocks/cities';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { addRentOffers, changeCity } from './action';

type InitialState = {
  city: City;
  offers: Offer[];
};

const initialState: InitialState = {
  city: Cities[0],
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addRentOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

