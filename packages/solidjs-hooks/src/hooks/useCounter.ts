import type { Accessor } from 'solid-js';
import { createSignal } from 'solid-js';

interface CounterActions {
  count: Accessor<number>;
  increment: (amount?: number) => void;
  decrement: (amount?: number) => void;
  set: (amount: number) => void;
  reset: (amount?: number) => void;
}

function useCounter(initialValue: number = 0): CounterActions {
  const [count, setCount] = createSignal(initialValue);

  const increment = (amount: number = 1) => {
    if (typeof amount !== 'number') {
      throw new Error(`amount has to be a number, got "${typeof amount}".`);
    }

    setCount((prevCount) => prevCount + amount);
  };

  const decrement = (amount: number = 1) => {
    if (typeof amount !== 'number') {
      throw new Error(`amount has to be a number, got "${typeof amount}".`);
    }

    setCount((prevCount) => prevCount - amount);
  };

  const set = (amount: number) => {
    if (typeof amount !== 'number') {
      throw new Error(`amount has to be a number, got "${typeof amount}".`);
    }

    setCount(amount);
  };

  const reset = (amount: number = initialValue) => {
    set(amount);
  };

  return {
    count,
    increment,
    decrement,
    set,
    reset,
  };
}

export default useCounter;
