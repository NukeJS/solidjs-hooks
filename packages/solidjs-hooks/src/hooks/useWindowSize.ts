import type { Accessor } from 'solid-js';
import {
  createEffect,
  onCleanup,
  createSignal,
  createRenderEffect,
} from 'solid-js';

function useWindowSize(): [Accessor<number>, Accessor<number>] {
  const [width, setWidth] = createSignal(0);
  const [height, setHeight] = createSignal(0);

  const handler = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  createEffect(() => {
    window.addEventListener('resize', handler);

    onCleanup(() => {
      window.removeEventListener('resize', handler);
    });
  });

  createRenderEffect(() => {
    handler();
  });

  return [width, height];
}

export default useWindowSize;
