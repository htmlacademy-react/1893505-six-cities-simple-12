import { Cities } from '../../mocks/cities';
import { City } from '../../types/city';

type CitiesProps = {
  currCity: City;
  onChangeCity: (city: City) => void;
};

export function CitiesList({currCity, onChangeCity}: CitiesProps): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Cities.map((city) => (
            <li className="locations__item" key={city.name}>
              <a className={`locations__item-link tabs__item ${currCity.name === city.name ? 'tabs__item--active' : ''}`}
                href="#" onClick={(evt) =>
                {
                  evt.preventDefault();
                  onChangeCity(city);
                }}
              >
                <span>{city.name}</span>
              </a>
            </li>)
          )}
        </ul>
      </section>
    </div>
  );
}
