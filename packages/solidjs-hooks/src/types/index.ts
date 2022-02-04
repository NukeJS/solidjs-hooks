import type { Accessor } from 'solid-js';

export type Fn<R = void> = () => R;

export type MaybeAccessor<T> = T | Accessor<T>;
export type MaybeAccessorValue<T extends MaybeAccessor<any>> = T extends Fn
  ? ReturnType<T>
  : T;
