// vendors
import React, { useState } from 'react';

// components
import Button from '../Button';
import Center from '../LayoutSections/Center';
import Modal from '../Modal';
import Paper from '../Paper';

// styles
import colors from '../../styles/colors';
import {
  NewsletterCardTitle,
  NewsletterPaperCard,
} from './NewsletterCard.styles';

// utils
import randomString from '../../utils/math/randomString';
import NewsletterModal from './NewsletterModal/NewsletterModal';

const customId = randomString();

const NewsletterCard = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <>
      <Center maxWidth='1280px' gutters='var(--container-gutter)' withText>
        <Paper
          lightColor={colors.bleu100}
          darkColor={colors.gris30}
          rounded
          css={NewsletterPaperCard}
        >
          <NewsletterCardTitle>
            <div className='top'>reste au</div>
            <div className='bottom'>courant</div>
          </NewsletterCardTitle>

          <Button onClick={openModal} inverted>
            m&apos;abonner à l&apos;infolettre
          </Button>
        </Paper>
      </Center>

      {modalVisible && (
        <Modal
          isOpen={modalVisible}
          aria={{ labbelledby: customId }}
          onClose={closeModal}
          closeTimeoutMS={200}
          fullSceen
          noBorder
          noTransition
        >
          <NewsletterModal />
        </Modal>
      )}
    </>
  );
};

export default NewsletterCard;
