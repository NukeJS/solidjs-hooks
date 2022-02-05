import type { Component } from 'solid-js';
import { useToggle } from 'solidjs-hooks';

const HookPage: Component = () => {
  const [on, toggle] = useToggle();

  return (
    <div>
      <p>{on() ? 'ON' : 'OFF'}</p>
      <button onClick={() => toggle()}>Toggle</button>
      <button onClick={() => toggle(true)}>Turn On</button>
      <button onClick={() => toggle(false)}>Turn Off</button>
    </div>
  );
};

export default HookPage;
