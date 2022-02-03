import type { Accessor } from 'solid-js';
import { createSignal } from 'solid-js';

interface CounterActions {
  count: Accessor<number>;
  increment: (amount?: number) => void;
  decrement: (amount?: number) => void;
  set: (amount: number) => void;
  reset: () => void;
}

function useCounter(initialValue: number = 0): CounterActions {
  const [count, setCount] = createSignal(initialValue);

  return {
    count,
    increment: (amount: number = 1) => {
      if (typeof amount !== 'number') {
        console.error(`amount has to be a number, got "${typeof amount}".`);
      }

      setCount((prevCount) => prevCount + amount);
    },
    decrement: (amount: number = 1) => {
      if (typeof amount !== 'number') {
        console.error(`amount has to be a number, got "${typeof amount}".`);
      }

      setCount((prevCount) => prevCount - amount);
    },
    set: (amount: number) => {
      if (typeof amount !== 'number') {
        console.error(`amount has to be a number, got "${typeof amount}".`);
      }

      setCount(amount);
    },
    reset: () => setCount(initialValue),
  };
}

export default useCounter;
