import type { Accessor } from 'solid-js';
import { createSignal, createRenderEffect } from 'solid-js';
import { useEffect } from './';

function useWindowSize(): {
  width: Accessor<number>;
  height: Accessor<number>;
} {
  const [width, setWidth] = createSignal(0);
  const [height, setHeight] = createSignal(0);

  const handler = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  });

  createRenderEffect(() => {
    handler();
  });

  return { width, height };
}

export default useWindowSize;
