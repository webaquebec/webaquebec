import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import GatsbyImage from 'gatsby-image';

// components
import { graphql, useStaticQuery } from 'gatsby';
import Button from '../components/Button';

// utils
import breakpointsRange from '../utils/breakpointsRange';
import { greaterThan } from '../utils/mediaQuery';

// images
import notFound from '../images/stickers/404.svg';
import imgFish from '../images/img-fish.png';

// styles
import colors from '../styles/colors';
import breakpoints from '../styles/breakpoints';
import { fontWeights } from '../styles/typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px;
  overflow-x: hidden;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [50, 130], bases: [16, 20] }],
    breakpoints.spacings
  )};

  text-align: center;
`;

const TextureWrapper = styled.div`
  position: absolute;
  z-index: -1;

  max-width: 100%;
  max-height: 100%;
  overflow: hidden;

  ${breakpointsRange(
    [{ prop: 'top', sizes: [100, 150], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const NotFound = styled.img`
  ${breakpointsRange(
    [
      { prop: 'marginBottom', sizes: [24, 40], bases: [16, 20] },
      { prop: 'maxWidth', sizes: [200, 350], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const swing = keyframes`
  0% { transform: rotate(3deg); }

  100% { transform: rotate(-3deg); }
`;

const FishWrapperTop = styled.span`
  display: none;

  animation: ${swing} ease-in-out 1s infinite alternate;

  ${greaterThan(1024)} {
    position: absolute;
    top: 30%;
    left: 10%;

    display: block;
  }

  img {
    transform: scale(-1, 1);
  }
`;

const FishWrapperBottom = styled.span`
  animation: ${swing} ease-in-out 1s infinite alternate;

  ${breakpointsRange(
    [{ prop: 'width', sizes: [150, 250], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${greaterThan(1024)} {
    position: absolute;
    top: 15%;
    right: 15%;
  }

  img {
    max-width: 100%;
  }
`;

const Info = styled.p`
  color: ${colors.blueberry};
  font-weight: ${fontWeights.ultrabold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [18, 24], bases: [16, 20] },
      { prop: 'maxWidth', sizes: [300, 350], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const CTAButton = styled(Button)`
  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [24, 40], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

// markup
const NotFoundPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        bubbleTexture: file(relativePath: { eq: "textures/bubbleWrap.png" }) {
          childImageSharp {
            fixed(width: 800) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  const [isAprilFirst, setIsAprilFirst] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const targetDate = new Date(currentDate.getFullYear(), 3, 1);
    setIsAprilFirst(
      currentDate.getMonth() === targetDate.getMonth() &&
        currentDate.getDate() === targetDate.getDate()
    );
  }, []);

  return (
    <Container>
      <TextureWrapper>
        <GatsbyImage
          fixed={data.bubbleTexture?.childImageSharp?.fixed}
          alt=''
          role='presentation'
        />
      </TextureWrapper>
      <NotFound src={notFound} alt='404' />

      {isAprilFirst && (
        <FishWrapperTop>
          <img src={imgFish} alt='' role='presentation' />
        </FishWrapperTop>
      )}

      <Info>Oups!</Info>
      <Info>La page que vous recherchez semble introuvable.</Info>

      {isAprilFirst && (
        <FishWrapperBottom>
          <img src={imgFish} alt='' role='presentation' />
        </FishWrapperBottom>
      )}

      <CTAButton to='/' tag='link'>
        retourner à l&apos;accueil
      </CTAButton>
    </Container>
  );
};

export default NotFoundPage;
