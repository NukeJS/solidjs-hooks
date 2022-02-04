import type { Accessor } from 'solid-js';
import { createEffect, onCleanup } from 'solid-js';

import { isDefined } from '../utils';

function useTimeout(callback: () => void, delay?: Accessor<number> | null) {
  createEffect(() => {
    if (!isDefined(delay) || typeof delay() !== 'number' || delay() < 0) return;

    const timeout = setTimeout(callback, delay());

    onCleanup(() => {
      clearTimeout(timeout);
    });
  });
}

export default useTimeout;
