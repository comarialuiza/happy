import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import landing from './../../assets/images/landing.svg';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(329.54deg, var(--color-primary) 0%, var(--color-secondary) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    height: 100%;
    max-height: 680px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    background: url(${landing}) no-repeat 80% center;

    @media (max-width: 1120px) {
        padding: 20px;
    }
`;

export const Logo = styled.img``;

export const Main = styled.main`
    max-width: 350px;
`;

export const Title = styled.h1`
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
`;

export const Description = styled.p`
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
`;

export const Location = styled.div`
    position: absolute;
    right: 0;
    top: 0;

    font-size: 24px;
    line-height: 34px;
    text-align: right;

    @media (max-width: 1120px) {
        right: 20px;
    }
`;

export const City = styled.h3`
    font-weight: 800;
`;

export const State = styled.p``;

export const Enter = styled(Link)`
    position: absolute;
    right: 0;
    bottom: 0;

    width: 80px;
    height: 80px;
    background: var(--color-tertiary);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background .3s;

    &:hover {
        background: var(--color-quaternary);
    }

    @media (max-width: 1120px) {
        right: 20px;
    }
`;