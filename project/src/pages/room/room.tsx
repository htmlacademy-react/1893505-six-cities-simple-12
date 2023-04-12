import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewForm } from '../../components/review-form/review-form';
import { ReviewList } from '../../components/review-list/review-list';
import { Offer } from '../../types/offer';
import { PropertyItem } from '../../components/property-item/property-item';
import { OffersList } from '../../components/offers-list/offers-list';
import { Map } from '../../components/map/map';
import { Cities } from '../../mocks/cities';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { store } from '../../store';

export function Room(): JSX.Element {

  const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
  const { id } = useParams();
  const [room, setRoom] = useState<Offer>();
  const [offersList, setOffersList] = useState<Offer[]>([]);
  const [activeOfferId, setActiveOfferId] = useState<number | null>(null);
  const currOffers = useAppSelector((state) => state.currentOffers);

  useEffect(() => {
    setRoom(currOffers.find((offer) => offer.id === Number(id)));
    setOffersList(currOffers.slice(1));
  }, []);

  if (!room) {
    return (<>Загрузка...</>);
  }

  return (
    <div className="page">
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src="img/room.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/studio-01.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio"/>
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {room?.title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={room && {width: `${room?.rating / 0.05}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{room?.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {room?.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {room?.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {room?.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{room?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {room?.goods.map((item) => (
                    <PropertyItem key={item} item={item} />
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={room?.host.name} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {room?.host.name}
                  </span>
                  <span className="property__user-status">
                    {room?.host.isPro}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewList/>
                <ReviewForm/>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map activeOfferId={activeOfferId} city={Cities.filter((city) => (city.name === room?.city.name))[0]} offers={offersList}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <OffersList offers={offersList} setActiveOfferId={setActiveOfferId}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
