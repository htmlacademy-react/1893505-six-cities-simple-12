import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppRoute } from '../const';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AppDispatch, State } from '../types/state-utils';
import { AuthData, UserData } from '../types/user-data';

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

export const changeAuthorizationStatus = createAction('auth/changeAuthorizationStatus', (authorizationStatus: boolean) => ({
  payload: authorizationStatus,
}));

export const setErrorAuth = createAction('auth/setErrorAuth', (errorAuth: string) => ({
  payload: errorAuth,
}));

export const setUserAuth = createAction('auth/setUserAuth', (userAuth: UserData) => ({
  payload: userAuth,
}));

export const redirectToRoute = createAction('data/redirectToRoute',(redirect: AppRoute) => ({
  payload: redirect
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

export const getAuthStatus = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchAuthStatus', async (_arg, { dispatch, extra: api }) => {
  await api.get<boolean>('/login')
    .catch((err) => {
      dispatch(changeAuthorizationStatus(false));
    });
});

export const authorization = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchAuthorize', async ({email, password}, { dispatch, extra: api }) => {
  const {data} = await api.post<UserData>('/login', {
    email, password
  });
  dispatch(setUserAuth(data));
  dispatch(changeAuthorizationStatus(true));
  dispatch(redirectToRoute(AppRoute.Main));
});
