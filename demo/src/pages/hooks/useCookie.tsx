import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { useCookie } from 'solidjs-hooks';

const HookPage: Component = () => {
  const [cookie, setCookie, removeCookie] = useCookie('my-cookie');
  const [count, setCount] = createSignal(0);

  const setCookieHandler = () => {
    setCount((prevCount) => prevCount + 1);
    setCookie(`my-awesome-cookie-${count()}`);
  };

  return (
    <div>
      <p>Cookie value: {cookie()}</p>
      <button onClick={() => setCookieHandler()}>Update Cookie</button>
      <button onClick={() => removeCookie()}>Delete Cookie</button>
    </div>
  );
};

export default HookPage;
