'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { DivIcon, LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { renderToStaticMarkup } from 'react-dom/server';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ContactMap = () => {
    const position: LatLngExpression = [48.8606, 2.3412];
    const iconMarkup = renderToStaticMarkup(
        <FaMapMarkerAlt size={32} />
    );
    const customIcon = new DivIcon({
        html: iconMarkup,
        className: '',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });
    return ( 
        <MapContainer center={position} zoom={7} className='h-100 w-full mt-8' scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={position} icon={customIcon}>
                <Popup>We&apos;re here in Kassel!</Popup>
            </Marker>
        </MapContainer>
     );
}
 
export default ContactMap;