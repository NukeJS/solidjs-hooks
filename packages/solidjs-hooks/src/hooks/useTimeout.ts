import type { MaybeAccessor } from '../types';
import { useEffect } from './';
import { access, isDefined } from '../utils';

function useTimeout(
  callback: () => void,
  delay?: MaybeAccessor<number> | null
): void {
  useEffect(() => {
    const _delay = access(delay);
    if (!isDefined(_delay) || typeof _delay !== 'number' || _delay < 0) return;

    const timeout = setTimeout(callback, _delay);

    return () => clearTimeout(timeout);
  });
}

export default useTimeout;
