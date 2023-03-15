import { useState } from 'react';
import { Offer } from '../../mocks/offers';
import { PlaceCard } from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[];
}

export function OffersList({offers}: OffersListProps): JSX.Element {

  const [activeOfferId, setActiveOfferId] = useState<number>(-1);
  //eslint-disable-next-line no-console
  console.log(activeOfferId);

  return (
    <>
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} setActiveOfferId={setActiveOfferId}/>) }
    </>
  );
}
