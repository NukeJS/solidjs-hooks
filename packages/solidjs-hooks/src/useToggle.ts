import type { Accessor } from 'solid-js';
import { createSignal } from 'solid-js';

function useToggle(
  initialValue: boolean = false
): [Accessor<boolean>, (newValue?: boolean) => void] {
  const [value, setValue] = createSignal(initialValue);

  const toggle = (newValue?: boolean) => {
    setValue((prevValue) =>
      typeof newValue === 'boolean' ? newValue : !prevValue
    );
  };

  return [value, toggle];
}

export default useToggle;
