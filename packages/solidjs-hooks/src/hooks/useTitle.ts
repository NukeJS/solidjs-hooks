import type { MaybeAccessor } from '../types';
import { createEffect, onCleanup } from 'solid-js';
import { isBrowser, access } from '../utils';

export interface TitleOptions {
  restoreOnCleanup?: boolean;
}

const DEFAULT_OPTIONS: TitleOptions = {
  restoreOnCleanup: false,
};

function useTitle(
  title: MaybeAccessor<string>,
  options: TitleOptions = DEFAULT_OPTIONS
): void {
  const _title = isBrowser ? document.title : '';

  createEffect(() => {
    document.title = access(title);
  });

  onCleanup(() => {
    if (options.restoreOnCleanup) {
      document.title = _title;
    }
  });
}

export default useTitle;
