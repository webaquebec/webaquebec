// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import { hideVisually } from 'polished';
import Center from '../../../components/LayoutSections/Center';
import Sidebar from '../../../components/LayoutSections/Sidebar/Sidebar';
import Map from '../../../components/Map/Map';
import Stack from '../../../components/LayoutSections/Stack';

// images
import vectorTarget from '../../../images/vectorTarget.svg';
import vectorUnicorn from '../../../images/vectorUnicorn.svg';

// styles
import {
  AddresseName,
  AddressesSpan,
  ContactInfo,
  MapContainer,
  OurAddresses,
  SectionContainer,
  Sticker,
  StickerHeaderSpan,
  Telephone,
} from './Addresses.styles';

const StickerHeading = ({ sticker, name }) => {
  const stickerSvg = {
    target: vectorTarget,
    unicorn: vectorUnicorn,
  }[sticker];
  return (
    <StickerHeaderSpan>
      <Sticker src={stickerSvg} role='presentation' alt='' />
      <AddresseName>{name}</AddresseName>
    </StickerHeaderSpan>
  );
};

StickerHeading.propTypes = {
  sticker: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const Addresses = () => (
  <SectionContainer>
    <Center maxWidth='1280px' gutters='var(--container-gutter)'>
      <Sidebar
        // contentMin='458px'
        // sideWidth='37%'
        // space='calc(var(--container-gutter) * 2)'
        contentMin='58%'
        sideWidth='322px'
        space='0'
      >
        <div
        // css={`
        //   overflow: hidden;
        // `}
        >
          <div>
            <OurAddresses>
              nos
              <AddressesSpan> adresses</AddressesSpan>
            </OurAddresses>

            <Stack space='24px'>
              <div>
                <StickerHeading sticker='target' name='nos bureaux' />

                <ContactInfo>
                  <span css={hideVisually}>Québec Numérique</span>

                  <div>
                    <span>330 Rue Saint-Vallier E Bureau 300,</span>
                    <br />
                    <span> Québec</span>,<span> QC </span>
                    <span>G1K 9C5</span>
                  </div>

                  <br />

                  <div>
                    <span>Téléphone : </span>
                    <Telephone href='tel:+18773342547'>
                      (877) 334-2547
                    </Telephone>
                  </div>
                </ContactInfo>
              </div>

              <div>
                <StickerHeading sticker='unicorn' name="l'évènement" />

                <ContactInfo>
                  <span css={hideVisually}>Web à Québec 2022</span>

                  <div>
                    <span css={hideVisually}>
                      Terminal de croisière - Port de Québec
                    </span>
                    <div>
                      <span>84 Rue Dalhousie,</span>
                      <br />
                      <span> Québec</span>,<span> QC </span>
                      <span>G1K 4C4</span>
                    </div>

                    <br />

                    <div>
                      <span>Téléphone : </span>
                      <Telephone href='tel:+14186496409'>
                        (418) 649-6409
                      </Telephone>
                    </div>
                  </div>
                </ContactInfo>
              </div>
            </Stack>
          </div>

          <MapContainer>
            <Map />
          </MapContainer>
        </div>
      </Sidebar>
    </Center>
  </SectionContainer>
);

export default Addresses;
