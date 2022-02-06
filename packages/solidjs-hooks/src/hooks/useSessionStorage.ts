import type { Accessor } from 'solid-js';
import { createRenderEffect, createSignal } from 'solid-js';

interface SessionStorageOptions<T> {
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
}

function useSessionStorage<T>(
  key: string,
  initialValue: T,
  options?: SessionStorageOptions<T>
): [Accessor<T>, (value: T) => void, () => void];
function useSessionStorage<T>(
  key: string,
  initialValue?: T,
  options?: SessionStorageOptions<T>
): [Accessor<T | undefined>, (value: T) => void, () => void];
function useSessionStorage<T>(
  key: string,
  initialValue?: T,
  options?: SessionStorageOptions<T>
): [Accessor<T | undefined>, (value: T) => void, () => void] {
  const serializer = (value: T) => {
    if (options?.serializer) {
      return options.serializer(value);
    }
    return JSON.stringify(value);
  };

  const deserializer = (value: string) => {
    if (options?.deserializer) {
      return options.deserializer(value);
    }

    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  };

  const getStoredValue = () => {
    try {
      const raw = sessionStorage.getItem(key);
      if (raw) {
        return deserializer(raw);
      }
    } catch (error) {
      console.error(error);
    }

    return initialValue;
  };

  const [state, setState] = createSignal<T | undefined>(getStoredValue());

  const set = (value: T) => {
    try {
      sessionStorage.setItem(key, serializer(value));
      setState(() => value);
    } catch (error) {
      console.error(error);
    }
  };

  const remove = () => {
    try {
      sessionStorage.removeItem(key);
      setState(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  createRenderEffect(() => {
    set(getStoredValue());
  });

  return [state, set, remove];
}

export default useSessionStorage;
