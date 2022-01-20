import React from 'react';
import PropTypes from 'prop-types';
import useCanvas from '../../hooks/useCanvas';

const Canvas = ({ draw, ...rest }) => {
  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} {...rest} />;
};

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
};

export default Canvas;
