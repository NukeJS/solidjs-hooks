import type { Component } from 'solid-js';
import { useLocalStorage } from 'solidjs-hooks';

const HookPage: Component = () => {
  const [value, setValue, remove] = useLocalStorage('my-key', 'foo');

  return (
    <div>
      <div>Value: {value()}</div>
      <button onClick={() => setValue('bar')}>bar</button>
      <button onClick={() => setValue('baz')}>baz</button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  );
};

export default HookPage;
