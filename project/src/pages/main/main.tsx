import { useEffect, useState } from 'react';
import { OffersList } from '../../components/offers-list/offers-list';
import { Map } from '../../components/map/map';
import { CitiesList } from '../../components/cities-list/cities-list';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {store} from '../../store/index';
import { addCurrentOffers, changeCity } from '../../store/action';
import { City } from '../../types/city';
import { SortOptions } from '../../components/sort-options/sort-options';
import { Auth } from '../../components/auth/auth';

export function Main(): JSX.Element {
  const useAppDispatch = () => useDispatch<typeof store.dispatch>();
  const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
  const currCity = useAppSelector((state) => state.city);
  const allOffers = useAppSelector((state) => state.offers);
  const currOffers = useAppSelector((state) => state.currentOffers);
  const dispatch = useAppDispatch();
  const [activeOfferId, setActiveOfferId] = useState<number>(1);

  useEffect(() => {
    dispatch(addCurrentOffers(allOffers.filter((offer) => offer.city.name === currCity.name)));
  }, [currCity]);

  const onChangeCity = (city: City) => {
    dispatch(changeCity(city));
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <Auth/>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList currCity={currCity} onChangeCity={onChangeCity}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currOffers.length} places to stay in {currCity.name}</b>
              <SortOptions/>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={currOffers} setActiveOfferId={setActiveOfferId}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={currCity} offers={currOffers} activeOfferId={activeOfferId}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
