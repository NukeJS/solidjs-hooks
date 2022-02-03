import type { Accessor } from 'solid-js';
import { createEffect, onCleanup } from 'solid-js';

function useInterval(callback: () => void, interval: Accessor<number>) {
  createEffect(() => {
    if (typeof interval() !== 'number' || interval() < 0) return;

    const intervalInstance = setInterval(callback, interval());

    onCleanup(() => {
      clearInterval(intervalInstance);
    });
  });
}

export default useInterval;
