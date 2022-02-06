import type { Component } from 'solid-js';
import { useCounter } from 'solidjs-hooks';

const HookPage: Component = () => {
  const { count, increment, decrement, set, reset } = useCounter();

  return (
    <div>
      <p>Current count: {count()}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => increment(5)}>Increment (+5)</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => decrement(5)}>Decrement (-5)</button>
      <button onClick={() => set(100)}>Set to 100</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default HookPage;
