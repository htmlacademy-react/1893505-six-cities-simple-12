import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../mocks/cities';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { UserData } from '../types/user-data';
import { addCurrentOffers, addRentOffers, changeCity, changeOffersLoading, changeAuthorizationStatus, setErrorAuth, setUserAuth } from './action';

type InitialState = {
  city: City;
  offers: Offer[];
  isOffersLoading: boolean;
  currentOffers: Offer[];
  authorizationStatus: boolean;
  errorAuth: string;
  userAuth: UserData | null;
};

const initialState: InitialState = {
  city: Cities[0],
  offers: [],
  isOffersLoading: false,
  currentOffers: [],
  authorizationStatus: false,
  errorAuth: '',
  userAuth: null,
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
    })
    .addCase(changeAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setErrorAuth, (state, action) => {
      state.errorAuth = action.payload;
    })
    .addCase(setUserAuth, (state, action) => {
      state.userAuth = action.payload;
    });
});

