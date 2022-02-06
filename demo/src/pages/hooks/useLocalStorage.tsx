import type { Component } from 'solid-js';
import { useLocalStorage } from 'solidjs-hooks';

const HookPage: Component = () => {
  const [state, set, remove] = useLocalStorage('user', {
    firstName: 'Ronnie',
    lastName: 'Waebers',
  });

  return (
    <div>
      <p>Local storage value: {JSON.stringify(state())}</p>
      <input
        type="text"
        value={state().firstName}
        onInput={(e) => {
          set({ ...state(), firstName: e.currentTarget.value });
        }}
      />
      <input
        type="text"
        value={state().lastName}
        onInput={(e) => {
          set({ ...state(), lastName: e.currentTarget.value });
        }}
      />
      <button onClick={() => remove()}>Remove</button>
    </div>
  );
};

export default HookPage;
