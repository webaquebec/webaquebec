// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import { hideVisually } from 'polished';
import Center from '../../../components/LayoutSections/Center';
import Sidebar from '../../../components/LayoutSections/Sidebar/Sidebar';

// images
import vectorTarget from '../../../images/vectorTarget.svg';
import vectorUnicorn from '../../../images/vectorUnicorn.svg';

// styles
import {
  AdresseBlock,
  AdresseBlockContainer,
  AdresseName,
  AdressesSpan,
  ContactInfo,
  FakeMap,
  FakeMapContainer,
  NosAdresses,
  SectionContainer,
  Sticker,
  StickerHeaderSpan,
  Telephone,
} from './Adresses.styles';

const StickerHeader = ({ sticker, name }) => {
  const stickerSvg = {
    target: vectorTarget,
    unicorn: vectorUnicorn,
  }[sticker];
  return (
    <StickerHeaderSpan>
      <Sticker src={stickerSvg} role='presentation' alt='' />
      <AdresseName>{name}</AdresseName>
    </StickerHeaderSpan>
  );
};

StickerHeader.propTypes = {
  sticker: PropTypes.string,
  name: PropTypes.string,
};

StickerHeader.defaultProps = {
  sticker: '',
  name: 'header',
};

const Adresses = () => (
  <SectionContainer>
    <Center maxWidth='1280px' gutters='var(--container-gutter)'>
      <Sidebar contentMin='58%' sideWidth='322px' side='left' space='0'>
        <div>
          <div>
            <NosAdresses>
              nos
              <AdressesSpan> adresses</AdressesSpan>
            </NosAdresses>
            <AdresseBlockContainer>
              <AdresseBlock>
                <StickerHeader sticker='target' name='nos bureaux' />
                <ContactInfo
                  itemScope
                  itemType='https://schema.org/Organization'
                >
                  <span itemProp='name' css={hideVisually}>
                    Québec Numérique
                  </span>

                  <div
                    itemProp='address'
                    itemScope
                    itemType='https://schema.org/PostalAddress'
                  >
                    <span itemProp='streetAddress'>
                      688 Boulevard Charest E,
                    </span>
                    <br />
                    <span itemProp='addressLocality'> Québec</span>,
                    <span itemProp='addressRegion'> QC </span>
                    <span itemProp='postalCode'>G1K 3J4</span>
                  </div>
                  <br />
                  <div>
                    <span>Téléphone : </span>
                    <Telephone href='tel:+18773342547' itemProp='telephone'>
                      (877) 334-2547
                    </Telephone>
                  </div>
                </ContactInfo>
              </AdresseBlock>
              <AdresseBlock>
                <StickerHeader sticker='unicorn' name="l'évènement" />
                <ContactInfo itemScope itemType='https://schema.org/Event'>
                  <span itemProp='name' css={hideVisually}>
                    Web à Québec 2022
                  </span>

                  <div
                    itemProp='location'
                    itemScope
                    itemType='https://schema.org/Place'
                  >
                    <span itemProp='name' css={hideVisually}>
                      Terminal de croisière - Port de Québec
                    </span>

                    <div
                      itemProp='address'
                      itemScope
                      itemType='https://schema.org/PostalAddress'
                    >
                      <span itemProp='streetAddress'>84 Rue Dalhousie,</span>
                      <br />
                      <span itemProp='addressLocality'> Québec</span>,
                      <span itemProp='addressRegion'> QC </span>
                      <span itemProp='postalCode'>G1K 4C4</span>
                    </div>
                    <br />
                    <div>
                      <span>Téléphone : </span>
                      <Telephone href='tel:+14186496409' itemProp='telephone'>
                        (418) 649-6409
                      </Telephone>
                    </div>
                  </div>
                </ContactInfo>
              </AdresseBlock>
            </AdresseBlockContainer>
          </div>
          <FakeMapContainer>
            <FakeMap />
          </FakeMapContainer>
        </div>
      </Sidebar>
    </Center>
  </SectionContainer>
);

export default Adresses;
