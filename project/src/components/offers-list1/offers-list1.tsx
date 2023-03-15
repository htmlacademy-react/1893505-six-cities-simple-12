import { useState } from 'react';
import { Offer } from '../../mocks/offers';
import { PlaceCard } from '../place-card1/place-card1';

type OffersListProps = {
  offers: Offer[];
}

export function OffersList({offers}: OffersListProps): JSX.Element {

  const [activeOfferId, setActiveOfferId] = useState<number>(-1);

  return (
    <>
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} setActiveOfferId={setActiveOfferId}/>) }
    </>
  );
}
