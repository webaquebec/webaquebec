/* eslint-disable no-param-reassign */
import { useRef, useEffect } from 'react';

/**
 * @param {Function} draw Callback function
 * @returns Canvas Ref
 *
 * @author Lucas Mirandas
 * @see https://gist.github.com/lucas-lm/e5f2c236b27273c6597ab9a36de5256b
 * @see more https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
 */
// const updateCanvasSize = (canvas, context) => {
//   const { width, height } = canvas.getBoundingClientRect();

//   if (canvas.width !== width || canvas.height !== height) {
//     const { devicePixelRatio: ratio = 1 } = window;
//     canvas.width = width * ratio;
//     canvas.height = height * ratio;
//     context.scale(ratio, ratio);
//     return true;
//   }

//   return false;
// };

const useCanvas = (callback, fps = undefined) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    // let frameCount = 0;
    let animationFrameId;

    const render = () => {
      // throttle requestAnimationFrame to a specific frame rate
      if (fps) {
        setTimeout(() => {
          animationFrameId = window.requestAnimationFrame(render);

          callback(context, canvas);
        }, 1000 / fps);
      } else {
        callback(context, canvas);
        animationFrameId = window.requestAnimationFrame(render);
        // frameCount += 1;
        // updateCanvasSize(canvas, context);
      }
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [callback, fps]);

  return canvasRef;
};

export default useCanvas;
