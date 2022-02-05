import type { Component } from 'solid-js';
import { useWindowSize } from 'solidjs-hooks';

const HookPage: Component = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Window width: {width()}</p>
      <p>Window height: {height()}</p>
    </div>
  );
};

export default HookPage;
