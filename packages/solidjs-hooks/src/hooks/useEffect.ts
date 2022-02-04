import { createEffect, onCleanup } from 'solid-js';
import { isDefined, isFunction } from '../utils';

function useEffect(callback: () => void | Function): void {
  createEffect(() => {
    if (isDefined(callback) && isFunction(callback)) {
      const cleanup = callback();
      if (isFunction(cleanup)) {
        onCleanup(() => cleanup());
      }
    }

    return;
  });
}

export default useEffect;
