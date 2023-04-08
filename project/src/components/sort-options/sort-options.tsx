import { useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from '../../store';
import { addRentOffers } from '../../store/action';
import { Offer } from '../../types/offer';

export function SortOptions(): JSX.Element {
  const useAppDispatch = () => useDispatch<typeof store.dispatch>();
  const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
  const dispatch = useAppDispatch();
  const [currSort, setCurrSort] = useState<string>('Popular');
  const currOffers = useAppSelector((state) => state.offers);
  const [isOpen, setOpen] = useState<boolean>(false);

  const changeSorting = (sortingType: string) => {
    const offersCopy: Offer[] = [...currOffers];
    switch (sortingType) {
      case 'Price: low to high':
        dispatch(addRentOffers(offersCopy.sort((a, b) => a.price > b.price ? 1 : -1)));
        break;
      case 'Price: high to low':
        dispatch(addRentOffers(offersCopy.sort((a, b) => a.price < b.price ? 1 : -1)));
        break;
      case 'Top rated first':
        dispatch(addRentOffers(offersCopy.sort((a, b) => a.rating < b.rating ? 1 : -1)));
        break;
      default:
        dispatch(addRentOffers(offersCopy));
        break;
    }
    setCurrSort(sortingType);
    setOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={() => setOpen(!isOpen)} className="places__sorting-type" tabIndex={0}>
        {currSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        <li className="places__option" tabIndex={0} onClick={() => changeSorting('Popular')}>Popular</li>
        <li className="places__option" tabIndex={0} onClick={() => changeSorting('Price: low to high')}>Price: low to high</li>
        <li className="places__option" tabIndex={0} onClick={() => changeSorting('Price: high to low')}>Price: high to low</li>
        <li className="places__option" tabIndex={0} onClick={() => changeSorting('Top rated first')}>Top rated first</li>
      </ul>
    </form>
  );
}
