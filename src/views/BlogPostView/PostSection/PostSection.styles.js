// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';

export const PostWrapper = styled.div`
  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  blockquote {
    max-width: 1066px;
    margin-right: auto;
    margin-left: auto;

    color: ${colors.bleu80};

    font-weight: ${fontWeights.bold};
    text-align: center;

    ${breakpointsRange(
      [
        { prop: 'fontSize', sizes: [28, 32], bases: [16, 20] },
        { prop: 'lineHeight', sizes: [33, 38], bases: [16, 20] },
        { prop: 'marginTop', sizes: [56, 40], bases: [16, 20] },
        { prop: 'marginBottom', sizes: [56, 40], bases: [16, 20] },
      ],
      breakpoints.spacings
    )};
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol {
    max-width: 854px;
    margin-right: auto;
    margin-left: auto;
  }

  ul,
  ol {
    ${breakpointsRange(
      [
        { prop: 'paddingLeft', sizes: [20, 32], bases: [16, 20] },
        { prop: 'fontSize', sizes: [16, 20], bases: [16, 20] },
        { prop: 'lineHeight', sizes: [22, 28], bases: [16, 20] },
      ],
      breakpoints.spacings
    )};
  }

  ul {
    list-style: none;

    ul {
      margin-top: 16px;
    }

    li {
      margin-bottom: 16px;
    }

    li::before {
      display: inline-block;

      width: 1em;
      margin-left: -1em;

      color: ${colors.bleu80};
      font-weight: ${fontWeights.bold};

      content: '•';
    }

    li li::before {
      content: '○';
    }

    li li li::before {
      content: '-';
    }
  }

  ol {
    list-style: none;

    counter-reset: li;

    ol {
      margin-top: 16px;
    }

    li {
      margin-bottom: 16px;

      counter-increment: li;
    }

    li::before {
      display: inline-block;

      width: 1.3em;
      margin-left: -1.3em;

      color: ${colors.bleu80};
      font-weight: ${fontWeights.bold};

      direction: rtl;

      content: '.' counter(li);
    }

    li li::before {
      content: '.' counter(li, lower-alpha);
    }

    li li li::before {
      width: 1.8em;
      margin-left: -1.8em;

      content: '(' counter(li) ')';
    }
  }

  p {
    margin-bottom: 32px;

    ${breakpointsRange(
      [
        { prop: 'fontSize', sizes: [16, 20], bases: [16, 20] },
        { prop: 'lineHeight', sizes: [22, 28], bases: [16, 20] },
      ],
      breakpoints.spacings
    )};

    &.introduction {
      font-weight: ${fontWeights.bold};

      ${breakpointsRange(
        [
          { prop: 'fontSize', sizes: [20, 24], bases: [16, 20] },
          { prop: 'lineHeight', sizes: [24, 33], bases: [16, 20] },
        ],
        breakpoints.spacings
      )};
    }

    &.publish-date {
      font-weight: ${fontWeights.bold};

      ${breakpointsRange(
        [{ prop: 'fontSize', sizes: [16, 16], bases: [16, 20] }],
        breakpoints.spacings
      )};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${breakpointsRange(
      [
        { prop: 'marginTop', sizes: [60, 80], bases: [16, 20] },
        { prop: 'marginBottom', sizes: [24, 40], bases: [16, 20] },
      ],
      breakpoints.spacings
    )};
  }

  h2 {
    ${breakpointsRange(
      [
        { prop: 'fontSize', sizes: [24, 32], bases: [16, 20] },
        { prop: 'lineHeight', sizes: [28, 38], bases: [16, 20] },
      ],
      breakpoints.spacings
    )};
  }

  h3 {
    ${breakpointsRange(
      [
        { prop: 'fontSize', sizes: [20, 28], bases: [16, 20] },
        { prop: 'lineHeight', sizes: [24, 32], bases: [16, 20] },
      ],
      breakpoints.spacings
    )};
  }

  .picture-block {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));

    ${breakpointsRange(
      [
        { prop: 'marginTop', sizes: [40, 80], bases: [16, 20] },
        { prop: 'marginBottom', sizes: [40, 80], bases: [16, 20] },
      ],
      breakpoints.spacings
    )};

    img {
      display: block;
      width: 100%;
      max-width: 1066px;
      margin: 0 auto;

      border-radius: 12px;
    }
  }
`;

export default PostWrapper;
