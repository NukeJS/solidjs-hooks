import type { MaybeAccessor } from '../types';
import { createEffect, onCleanup } from 'solid-js';
import { access, isDefined } from '../utils';

function useInterval(
  callback: () => void,
  delay?: MaybeAccessor<number> | null
): void {
  createEffect(() => {
    const _delay = access(delay);
    if (!isDefined(_delay) || typeof _delay !== 'number' || _delay < 0) return;

    const interval = setInterval(callback, _delay);

    onCleanup(() => {
      clearInterval(interval);
    });
  });
}

export default useInterval;
