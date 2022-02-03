import type { Accessor } from 'solid-js';
import { createEffect, onCleanup } from 'solid-js';

function useTimeout(callback: () => void, delay?: Accessor<number> | null) {
  createEffect(() => {
    if (
      delay === null ||
      delay === undefined ||
      typeof delay() !== 'number' ||
      delay() < 0
    )
      return;

    const timeout = setTimeout(callback, delay());

    onCleanup(() => {
      clearTimeout(timeout);
    });
  });
}

export default useTimeout;
