import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Map, Popup } from 'react-leaflet';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
`;

export const Side = styled.aside`
    width: 440px;
    background: linear-gradient(329.54deg, var(--color-primary) 0%, var(--color-secondary) 100%);
    padding: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Header = styled.header``;

export const Logo = styled.img``;

export const Title = styled.h2`
    font-size: 40px;
    font-weight: 800;
    line-height: 50px;
    margin-top: 64px;
`;

export const Description = styled.p`
    line-height: 28px;
    margin-top: 24px;
`;

export const Footer = styled.footer`
    line-height: 24px;
`;

export const City = styled.h3`
    font-weight: 800;
`;

export const State = styled.p``;

export const MapContainer = styled(Map)`
    z-index: 0;
`;

export const PopUp = styled(Popup)`
    .leaflet-popup-content-wrapper {
        background-color: red;
        background: rgba(255, 255, 255, .8);
        border-radius: 20px;
        box-shadow: none;
    }

    .leaflet-popup-content {
        color: var(--color-primary);
        font-size: 20px;
        font-weight: bold;
        margin: 8px 12px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .leaflet-popup-tip-container {
        display: none;
    }
`;

export const AccessOrphanage = styled(Link)`
    width: 40px;
    height: 40px;
    background-color: var(--color-secondary);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Enter = styled(Link)`
    position: absolute;
    right: 40px;
    bottom: 40px;
    width: 64px;
    height: 64px;
    background: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    transition: background .3s;
    z-index: 10;

    &:hover {
        background: var(--color-secondary);
    }
`;