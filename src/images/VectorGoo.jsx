import React from 'react';

const VectorGoo = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' version='1.1' {...props}>
    <defs>
      <filter id='goo'>
        <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
        <feColorMatrix
          in='blur'
          mode='matrix'
          values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
          result='goo'
        />
        <feBlend in='SourceGraphic' in2='goo' />
      </filter>
    </defs>
  </svg>
);

export default VectorGoo;
