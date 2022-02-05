import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { useTimeout } from 'solidjs-hooks';

const HookPage: Component = () => {
  const [count, setCount] = createSignal(0);
  const [delay, setDelay] = createSignal(1000);

  useTimeout(() => {
    setCount((prevCount) => prevCount + 1);
  }, delay);

  return (
    <div>
      <p>Count is {count()}</p>
      <button onClick={() => setDelay((prevDelay) => prevDelay + 1000)}>
        Increase timeout delay
      </button>
      <button onClick={() => setDelay((prevDelay) => prevDelay - 1000)}>
        Decrease timeout delay
      </button>
    </div>
  );
};

export default HookPage;
