// components
import { graphql } from 'gatsby';
import BlockEmbed from './BlockEmbed';
import BlockGallery from './BlockGallery';
import BlockHeading from './BlockHeading';
import BlockImage from './BlockImage';
import BlockList from './BlockList';
import BlockParagraph from './BlockParagraph';
import BlockIntro from './BlockPostIntro';
import BlockPullquote from './BlockPullquote';

export default {
  'waq/post-intro': BlockIntro,
  'core/pullquote': BlockPullquote,
  'core/paragraph': BlockParagraph,
  'core/heading': BlockHeading,
  'core/image': BlockImage,
  'core/list': BlockList,
  'core/gallery': BlockGallery,
  'core/embed': BlockEmbed,
};

export const query = graphql`
  fragment WpBlockContent on WpBlock {
    name
    saveContent
    ...WpBlockPostIntro
    ...WpCoreHeadingBlock
    ...WpCoreParagraphBlock
    ...WpCorePullquoteBlock
    ...WpCoreListBlock
    ...WpCoreImageBlock
    ...WpCoreGalleryBlock
    ...WpCoreEmbedBlock
  }
`;
