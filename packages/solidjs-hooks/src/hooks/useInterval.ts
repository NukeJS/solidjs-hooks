import type { Accessor } from 'solid-js';
import { createEffect, onCleanup } from 'solid-js';

import { isDefined } from '../utils';

function useInterval(callback: () => void, delay?: Accessor<number> | null) {
  createEffect(() => {
    if (!isDefined(delay) || typeof delay() !== 'number' || delay() < 0) return;

    const interval = setInterval(callback, delay());

    onCleanup(() => {
      clearInterval(interval);
    });
  });
}

export default useInterval;
