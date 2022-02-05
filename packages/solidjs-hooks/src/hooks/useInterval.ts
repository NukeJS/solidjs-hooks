import type { MaybeAccessor } from '../types';
import { useEffect } from './';
import { access, isDefined } from '../utils';

function useInterval(
  callback: () => void,
  delay?: MaybeAccessor<number> | null
): void {
  useEffect(() => {
    const _delay = access(delay);
    if (!isDefined(_delay) || typeof _delay !== 'number' || _delay < 0) return;

    const interval = setInterval(callback, _delay);

    return () => clearInterval(interval);
  });
}

export default useInterval;
