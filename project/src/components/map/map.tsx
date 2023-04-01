import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';

type MapProps = {
  city: City;
  offers: Offer[];
  activeOfferId: number | null;
};

export function Map({city, offers, activeOfferId}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [14, 39],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [27, 39],
    iconAnchor: [14, 39],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.lat,
            lng: offer.location.lng,
          }, {
            icon: activeOfferId && offer.id === activeOfferId ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, activeOfferId]);

  return (
    <div
      style={{height: '600px'}}
      ref={mapRef}
    >
    </div>
  );
}
