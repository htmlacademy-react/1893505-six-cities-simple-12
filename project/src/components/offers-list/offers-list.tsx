import { Offer } from '../../types/offer';
import { PlaceCard } from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[];
  setActiveOfferId: (activeOfferId: number) => void;
}

export function OffersList({offers, setActiveOfferId}: OffersListProps): JSX.Element {

  return (
    <>
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} setActiveOfferId={setActiveOfferId}/>) }
    </>
  );
}
