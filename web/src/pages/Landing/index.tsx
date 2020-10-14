import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

import { Container, ContentWrapper, Logo, Main, Title, Description, Location, City, State, Enter } from './styles';

import logo from './../../assets/images/logo.svg';

const Landing: React.FC = () => {
    return (
        <Container>
            <ContentWrapper>
                <Logo src={ logo } alt="Happy" />
                
                <Main>
                    <Title>Leve felicidade para o mundo</Title>
                    <Description>Visite orfanatos e mude o dia de muitas crianças.</Description>
                </Main>

                <Location>
                    <City>Curitiba</City>
                    <State>Paraná</State>
                </Location>

                <Enter to="/orphanages">
                    <FiArrowRight size={ 26 } color="rgba(0, 0, 0, 0.6"/>
                </Enter>
            </ContentWrapper>
        </Container>
    );
}

export default Landing;