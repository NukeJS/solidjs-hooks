import type { MaybeAccessor, MaybeAccessorValue } from '../types';
import { isFunction } from './';

export function access<T extends MaybeAccessor<any>>(
  value: T
): MaybeAccessorValue<T> {
  return isFunction(value) ? value() : value;
}
