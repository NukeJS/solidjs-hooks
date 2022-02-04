import type { Accessor } from 'solid-js';
import { createEffect, onCleanup } from 'solid-js';
import { isBrowser } from '../utils';

export interface TitleOptions {
  restoreOnCleanup?: boolean;
}

const DEFAULT_OPTIONS: TitleOptions = {
  restoreOnCleanup: false,
};

function useTitle(
  title: Accessor<string>,
  options: TitleOptions = DEFAULT_OPTIONS
) {
  const _title = isBrowser ? document.title : '';

  createEffect(() => {
    document.title = title();
  });

  onCleanup(() => {
    if (options.restoreOnCleanup) {
      document.title = _title;
    }
  });
}

export default useTitle;
