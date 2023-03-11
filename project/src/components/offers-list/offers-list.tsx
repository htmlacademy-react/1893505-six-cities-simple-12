import { Offer } from '../../mocks/offers';
import { PlaceCard } from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[];
}

export function OffersList({offers}: OffersListProps): JSX.Element {

  return (
    <>
      <PlaceCard offers={offers[0]}/>
      <PlaceCard offers={offers[1]}/>
      <PlaceCard offers={offers[2]}/>
      <PlaceCard offers={offers[3]}/>
    </>
  );
}
