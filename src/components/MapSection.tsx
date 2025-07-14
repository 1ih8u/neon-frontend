import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapSection: React.FC = () => {
  const apiKey = '58288b3a-1a34-467d-ab3f-5297b7fbfc53';
  const placemarkCoords = [55.451972, 37.561931];

  return (
    <section className="w-full h-[85vh]">
      <YMaps query={{ apikey: apiKey }}>
        <Map
          defaultState={{
            center: placemarkCoords,
            zoom: 16,
          }}
          width="100%"
          height="100%"
        >
          <Placemark geometry={placemarkCoords} />
        </Map>
      </YMaps>
    </section>
  );
};

export default MapSection; 