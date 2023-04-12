import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../mocks/cities';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { addCurrentOffers, addRentOffers, changeCity, changeOffersLoading } from './action';

type InitialState = {
  city: City;
  offers: Offer[];
  isOffersLoading: boolean;
  currentOffers: Offer[];
};

const initialState: InitialState = {
  city: Cities[0],
  offers: [],
  isOffersLoading: false,
  currentOffers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addRentOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeOffersLoading, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(addCurrentOffers, (state, action) => {
      state.currentOffers = action.payload;
    });
});

