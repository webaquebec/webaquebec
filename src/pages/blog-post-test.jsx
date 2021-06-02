import React from 'react';
import { css } from 'styled-components';

// components
import Layout from '../components/Layout';
import Center from '../components/LayoutSections/Center';
import Grid from '../components/LayoutSections/Grid';
import SectionContainer from '../components/SectionContainer';
import HeroSection from '../views/BlogPostView/HeroSection/HeroSection';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// styles
import breakpoints from '../styles/breakpoints';

const postContainer = css`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [40, 80], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [40, 80], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const BlogPostPage = () => {
  return (
    <Layout>
      <SectionContainer faded>
        <HeroSection
          title='10 bonnes raisons d’acheter ton billet pour le WAQ'
          publishDate='2 janvier 2021'
          featuredPicture='https://via.placeholder.com/998x531'
        />

        <Center
          maxWidth='var(--max-container-width)'
          gutters='var(--container-gutter)'
          className='blog-post-content'
          css={postContainer}
        >
          <p className='introduction'>
            Introduction lorem ipsum dolor sit amet, consectetur adipiscing sed
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            aliqua. Metus aliquam eleifend mi in nulla posuere sollicitudin.
            Fringilla ut morbi tincidunt augue interdum velit euismod in.
          </p>
          <blockquote>
            “ Exergues et autres citations lorem ipsum dolor sit amet
            consectetur. ”
          </blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            incididunt ut labore et dolore magna aliqua. Metus aliquam in in in
            in nulla posuere sollicitudin. Fringilla ut morbi tincidunt augue
            augue interdum velit euismod in. Et ultrices neque ornare aenean
            euismod elementum nisi quis eleifend. Quis imperdiet massa pulvinar
            pulvinar sapien.
          </p>
          <p>
            Eget arcu dictum varius duis at consectetur lorem donec massa. enim
            enim facilisis gravida neque convallis a cras. Odio morbi quis odio
            odio odio aenean sed adipiscing diam. Semper auctor neque vitae
            pellentesque. Phasellus faucibus scelerisque eleifend donec
            vulputate sapien. Neque ornare aenean euismod elementum nisi quis
            eleifend quam. Nunc aliquet bibendum enim facilisis gravida.
          </p>
          <div className='picture-block'>
            <img src='https://via.placeholder.com/1080x520' alt='' />
          </div>
          <h2>Ceci est un sous-titre</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            incididunt ut labore et dolore magna aliqua. Metus aliquam in in in
            in nulla posuere sollicitudin. Fringilla ut morbi tincidunt augue
            augue interdum velit euismod in. Et ultrices neque ornare aenean
            euismod elementum nisi quis eleifend. Quis imperdiet massa pulvinar
            pulvinar sapien.
          </p>
          <p>
            Eget arcu dictum varius duis at consectetur lorem donec massa. enim
            enim facilisis gravida neque convallis a cras. Odio morbi quis odio
            odio odio aenean sed adipiscing diam. Semper auctor neque vitae
            pellentesque. Phasellus faucibus scelerisque eleifend donec pretium
            pretium vulputate sapien. Neque ornare aenean euismod elementum nisi
            nisi quis eleifend quam. Nunc aliquet bibendum enim facilisis
            gravida.
          </p>
          <ul>
            <li>
              Liste à puce lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              enim ad minim veniam.
            </li>
            <li>
              Ut enim ad minim veniam.
              <ul>
                <li>
                  Deuxième niveau de liste lorem ipsum dolor sit amet ut labore.
                </li>
                <li>
                  Consectetur adipiscing elit, sed do eiusmod tempor labore et
                  labore et dolore magna aliqua. Ut enim ad minim veniam.
                  <ul>
                    <li>
                      Troisième niveaux de liste lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor ut ut
                      ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </li>
                    <li>Ut enim ad minim veniam.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <div className='picture-block'>
            <Grid space='2rem'>
              <img src='https://via.placeholder.com/624x446' alt='' />
              <img src='https://via.placeholder.com/624x446' alt='' />
            </Grid>
          </div>
          <blockquote>
            “ Courte intro lorem ipsum dolor sit amet, consectetur adipiscing
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            enim ad minim veniam dolor sit amet dela nuncatane. ”
          </blockquote>
          <h2>Sous-titre consector dela nunca</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            incididunt ut labore et dolore magna aliqua. Metus aliquam in in in
            in nulla posuere sollicitudin. Fringilla ut morbi tincidunt augue
            augue interdum velit euismod in. Et ultrices neque ornare aenean
            euismod elementum nisi quis eleifend. Quis imperdiet massa pulvinar
            pulvinar sapien.
          </p>
          <p>
            Eget arcu dictum varius duis at consectetur lorem donec massa. enim
            enim facilisis gravida neque convallis a cras. Odio morbi quis odio
            odio odio aenean sed adipiscing diam. Semper auctor neque vitae
            pellentesque. Phasellus faucibus scelerisque eleifend donec pretium
            pretium vulputate sapien. Neque ornare aenean euismod elementum nisi
            nisi quis eleifend quam. Nunc aliquet bibendum enim facilisis
            gravida.
          </p>
          <h2>Sous-titre lorem ipsum dolor sit amet</h2>
          <ol>
            <li>
              Liste à puce lorem ipsum dolor sit amet, consectetur adipiscing
              sed do eiusmod tempor incididunt ut labore et dolore magna enim
              enim ad minim veniam.
            </li>
            <li>
              Ut enim ad minim veniam.
              <ol>
                <li>
                  Deuxième niveau de liste lorem ipsum dolor sit amet ut labore.
                </li>
                <li>
                  Consectetur adipiscing elit, sed do eiusmod tempor labore et
                  labore et dolore magna aliqua. Ut enim ad minim veniam.
                  <ol>
                    <li>
                      Troisième niveaux de liste lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor ut ut
                      ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </li>
                    <li>Ut enim ad minim veniam.</li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
          <div className='picture-block'>
            <Grid minWidth='250px' space='2rem'>
              <img src='https://via.placeholder.com/288x217' alt='' />
              <img src='https://via.placeholder.com/288x217' alt='' />
              <img src='https://via.placeholder.com/288x217' alt='' />
              <img src='https://via.placeholder.com/288x217' alt='' />
            </Grid>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            incididunt ut labore et dolore magna aliqua. Metus aliquam in in in
            in nulla posuere sollicitudin. Fringilla ut morbi tincidunt augue
            augue interdum velit euismod in. Et ultrices neque ornare aenean
            euismod elementum nisi quis eleifend. Quis imperdiet massa pulvinar
            pulvinar sapien.
          </p>
          <p>
            Eget arcu dictum varius duis at consectetur lorem donec massa. enim
            enim facilisis gravida neque convallis a cras. Odio morbi quis odio
            odio odio aenean sed adipiscing diam. Semper auctor neque vitae
            pellentesque. Phasellus faucibus scelerisque eleifend donec pretium
            pretium vulputate sapien. Neque ornare aenean euismod elementum nisi
            nisi quis eleifend quam. Nunc aliquet bibendum enim facilisis
            gravida.
          </p>
          <p className='publish-date'>
            Publié le 2 janvier 2021 par Danielle Simard
          </p>
        </Center>
      </SectionContainer>
    </Layout>
  );
};

export default BlogPostPage;
