import type { Accessor } from 'solid-js';
import { createSignal } from 'solid-js';
import Cookies from 'js-cookie';

function useCookie(
  key: string
): [
  Accessor<string | null>,
  (newValue: string, options?: Cookies.CookieAttributes) => void,
  () => void
] {
  const [cookie, setCookie] = createSignal(Cookies.get(key) || null);

  const set = (newValue: string, options?: Cookies.CookieAttributes) => {
    Cookies.set(key, newValue, options);
    setCookie(newValue);
  };

  const remove = () => {
    Cookies.remove(key);
    setCookie(null);
  };

  return [cookie, set, remove];
}

export default useCookie;
