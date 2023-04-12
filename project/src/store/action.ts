import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AppDispatch, State } from '../types/state-utils';

export const changeCity = createAction('offers/changeCity', (city: City) =>({
  payload: city,
}));

export const addRentOffers = createAction('offers/addRentOffers', (offers: Offer[]) => ({
  payload: offers,
}));

export const changeOffersLoading = createAction('offers/changeOffersLoading', (isLoading: boolean) => ({
  payload: isLoading,
}));

export const addCurrentOffers = createAction('offers/addCurrentOffers', (offers: Offer[]) => ({
  payload: offers,
}));

export const getOfferAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(changeOffersLoading(true));
  const { data } = await api.get<Offer[]>('/hotels');
  dispatch(changeOffersLoading(false));
  dispatch(addRentOffers(data));
});
