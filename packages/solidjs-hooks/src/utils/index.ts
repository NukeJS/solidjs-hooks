import type { MaybeAccessor, MaybeAccessorValue } from '../types';

export function isDefined<T>(value: T | undefined | null): value is T {
  return typeof value !== 'undefined' && value !== null;
}

export function isFunction<T>(value: T | Function): value is Function {
  return typeof value === 'function';
}

export const isBrowser = typeof window !== 'undefined';

export function access<T extends MaybeAccessor<any>>(
  value: T
): MaybeAccessorValue<T> {
  return isFunction(value) ? value() : value;
}
