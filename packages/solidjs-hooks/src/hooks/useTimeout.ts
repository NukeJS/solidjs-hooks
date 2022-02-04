import type { MaybeAccessor } from '../types';
import { createEffect, onCleanup } from 'solid-js';
import { access, isDefined } from '../utils';

function useTimeout(
  callback: () => void,
  delay?: MaybeAccessor<number> | null
): void {
  createEffect(() => {
    const _delay = access(delay);
    if (!isDefined(_delay) || typeof _delay !== 'number' || _delay < 0) return;

    const timeout = setTimeout(callback, _delay);

    onCleanup(() => {
      clearTimeout(timeout);
    });
  });
}

export default useTimeout;
