// vendors
import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

// serializers
import defaultSerializers from './blockSerializer';

const Blocks = ({ blocks, serializers }) => (
  <>
    {blocks.map((block) => {
      const serializer = serializers[block.name];

      if (!serializer) return ReactHtmlParser(block.saveContent);

      return serializer(block);
    })}
  </>
);

Blocks.propTypes = {
  /**
   * Blocks from CMS to be serialize as react components
   */
  blocks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  /**
   *  Serialize each block to their respective react component
   */
  serializers: PropTypes.shape({}),
};
Blocks.defaultProps = {
  serializers: defaultSerializers,
};

export default Blocks;
