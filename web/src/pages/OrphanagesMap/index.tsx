import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { Container, Side, Header, Logo, Title, Description, Footer, City, State, Enter, MapContainer } from './styles';
import mapMarker from './../../assets/images/map-marker.svg';

const OrphanagesMap: React.FC = () => {
    return (
        <Container>
            <Side>
                <Header>
                    <Logo src={ mapMarker } alt="Happy" />
                    <Title>Escolha um orfanato no mapa</Title>
                    <Description>Muitas crianças estão esperando a sua visita :)</Description>
                </Header>

                <Footer>
                    <City>Curitiba</City>
                    <State>Paraná</State>
                </Footer>
            </Side>

            <MapContainer 
                center={[-25.4677022, -49.2942842]}
                zoom={ 15 } 
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </MapContainer>

            <Enter to="/">
                <FiPlus size={ 32 } color="#fff"/>
            </Enter>
        </Container>
    );
}

export default OrphanagesMap;