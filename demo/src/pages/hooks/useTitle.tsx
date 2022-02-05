import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { useTitle } from 'solidjs-hooks';

const HookPage: Component = () => {
  const [title, setTitle] = createSignal(document.title);

  // Also accepts a string instead of an Accessor.
  useTitle(title);

  return (
    <div>
      <p>Document title is: {title()}</p>
      <form>
        <label for="title">Change document title:</label>
        <input
          type="text"
          id="title"
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </form>
    </div>
  );
};

export default HookPage;
