import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { useInterval } from 'solidjs-hooks';

const HookPage: Component = () => {
  const DEFAULT_DELAY = 1000;
  const [count, setCount] = createSignal(0);
  const [delay, setDelay] = createSignal(DEFAULT_DELAY);

  useInterval(() => {
    setCount((prevCount) => prevCount + 1);
  }, delay);

  const toggleInterval = () => {
    // @ts-ignore
    setDelay((prevDelay) => (prevDelay ? null : DEFAULT_DELAY));
  };

  return (
    <div>
      <p>Count: {count()}</p>
      <div>
        <button onClick={() => toggleInterval()}>Toggle Interval</button>
      </div>
    </div>
  );
};

export default HookPage;
