import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { useEffect } from 'solidjs-hooks';

const HookPage: Component = () => {
  const [count, setCount] = createSignal(0);
  const [delay, setDelay] = createSignal(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, delay());

    return () => clearInterval(interval);
  });

  return (
    <div>
      <p>Count is {count()}</p>
      <button onClick={() => setDelay((prevDelay) => prevDelay + 1000)}>
        Increase interval delay
      </button>
      <button onClick={() => setDelay((prevDelay) => prevDelay - 1000)}>
        Decrease interval delay
      </button>
    </div>
  );
};

export default HookPage;
