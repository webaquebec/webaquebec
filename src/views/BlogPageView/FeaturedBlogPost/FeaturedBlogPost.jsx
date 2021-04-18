// vendors
import React from 'react';

// components
import Switcher from '../../../components/LayoutSections/Switcher';
import Button from '../../../components/Button';
import Paper from '../../../components/Paper';

// images
import vectorStarDecoration from '../../../images/vectorStarDecoration.svg';

// styles
import {
  PostWrapper,
  PostContent,
  PostPictureWrapper,
  PostPicture,
  PostTitle,
  StarDecoration,
  PostDate,
  PostSummary,
} from './FeaturedBlogPost.styles';
import colors from '../../../styles/colors';

const FeaturedBlogPost = () => {
  const data = {
    id: 1,
    alt: '',
    picture: 'https://place-hold.it/600x434',
    title:
      '10 bonnes raisons de prévoir prendre congé pendant le WAQ en juin 2021',
    publishDate: '6 avril 2021',
    summary: `« J’devrais-tu, j’devrais-tu pas? » La réponse est simple : oui, tu devrais. Que le Web à Québec soit une nouvelle expérience lorem ipsum dolor sit amet...`,
    link: '/',
  };

  return (
    <Paper
      lightColor={colors.bleu80}
      darkColor={colors.gris30}
      rounded
      css={PostWrapper}
    >
      <Switcher threshold='768px' space='2rem' limit={2}>
        <div>
          <PostPictureWrapper>
            <PostPicture src={data.picture} alt={data.alt} />
          </PostPictureWrapper>
          <PostContent>
            <PostTitle>{data.title}</PostTitle>
            <PostDate>
              <StarDecoration
                src={vectorStarDecoration}
                role='presentation'
                alt=''
              />
              {data.publishDate}
            </PostDate>
            <PostSummary>{data.summary}</PostSummary>
            <Button to={data.link} tag='href' primary small>
              lire l&apos;article
            </Button>
          </PostContent>
        </div>
      </Switcher>
    </Paper>
  );
};

export default FeaturedBlogPost;
