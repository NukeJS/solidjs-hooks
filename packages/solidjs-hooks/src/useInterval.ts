import type { Accessor } from 'solid-js';
import { createEffect, onCleanup } from 'solid-js';

function useInterval(callback: () => void, delay?: Accessor<number> | null) {
  createEffect(() => {
    if (
      delay === null ||
      delay === undefined ||
      typeof delay() !== 'number' ||
      delay() < 0
    )
      return;

    const interval = setInterval(callback, delay());

    onCleanup(() => {
      clearInterval(interval);
    });
  });
}

export default useInterval;
