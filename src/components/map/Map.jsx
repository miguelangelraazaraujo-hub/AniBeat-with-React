import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Mapa({ lat = 28.1235, lng = -15.4363, zoom = 13 }) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={zoom}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='© OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      <Marker position={[lat, lng]}>
        <Popup>
          Ubicación seleccionada
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Mapa;