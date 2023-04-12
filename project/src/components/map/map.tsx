import {useRef, useEffect} from 'react';
import leaflet, { Marker } from 'leaflet';
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
      map.flyTo(
        [city.latitude, city.longitude],
        city.zoom,
        { animate: true, duration: 2 }
      );
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      offers.forEach((offer: Offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            activeOfferId && offer.id === activeOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
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
