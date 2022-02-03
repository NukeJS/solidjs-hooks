import type { Accessor } from 'solid-js';
import { createEffect, onCleanup } from 'solid-js';

function useTimeout(callback: () => void, delay: Accessor<number>) {
  createEffect(() => {
    if (typeof delay() !== 'number' || delay() < 0) return;

    const timerInstance = setTimeout(callback, delay());

    onCleanup(() => {
      clearTimeout(timerInstance);
    });
  });
}

export default useTimeout;
