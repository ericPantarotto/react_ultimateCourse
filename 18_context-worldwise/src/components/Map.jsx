import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import styles from './Map.module.css';

function Map() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [mapPosition] = useState([40, 0]);

  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

      {/* <button
        onClick={(ev) => {
          ev.stopPropagation(); //HACK: to prevent the click event from bubbling up to the parent div
          setSearchParams({ lat: '40.7128', lng: '-74.0060' });
        }}
      >
        Change Pos. Test
      </button> */}
    </div>
  );
}

export default Map;
