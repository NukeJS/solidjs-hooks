# solidjs-hooks

A collection of useful SolidJS hooks.

## Installation

```bash
# Using NPM
npm install solidjs-hooks
# Using Yarn
yarn add solidjs-hooks
```

## Usage

### `useBoolean`

SolidJS state hook that tracks the value of a boolean.

This is an alias of [`useToggle`](#usetoggle).



### `useCookie`

SolidJS hook that returns the current value of a cookie, a callback to set the cookie's value, and a callback to remove the cookie.

#### Usage

```jsx
import { createSignal } from 'solid-js';
import { useCookie } from 'solidjs-hooks';

const Demo = () => {
  const [cookie, setCookie, removeCookie] = useCookie('my-cookie');
  const [count, setCount] = createSignal(0);

  const setCookieHandler = () => {
    setCount((prevCount) => prevCount + 1);
    setCookie(`my-awesome-cookie-${cookie()}`);
  }

  return (
    <div>
      <p>Cookie value: {cookie()}</p>
      <button onClick={() => setCookieHandler()}>Update Cookie</button>
      <button onClick={() => removeCookie()}>Delete Cookie</button>
    </div>
  )
}
```



### `useCounter`

SolidJS state hook that tracks a numeric value.

`useNumber` is an alias for `useCounter`.

#### Usage

```jsx
import { useCounter } from 'solidjs-hooks';

const Demo = () => {
  const { count, increment, decrement, set, reset } = useCounter();

  return (
    <div>
      <p>Current count: {count()}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => increment(5)}>Increment (+5)</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => decrement(5)}>Decrement (-5)</button>
      <button onClick={() => set(100)}>Set to 100</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  )
}
```



### `useEffect`

A React-like functionality for the `createEffect` hook that SolidJS provides.

#### Usage

```jsx
import { createSignal } from 'solid-js';
import { useEffect } from 'solidjs-hooks';

const Demo = () => {
  const [count, setCount] = createSignal(0);
  const [delay, setDelay] = createSignal(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, delay());

    return () => clearInterval(interval);
  });

  return (
    <div>
      <p>Count is {count()}</p>
      <button onClick={() => setDelay((prevDelay) => prevDelay + 1000)}>
        Increase interval delay
      </button>
      <button onClick={() => setDelay((prevDelay) => prevDelay - 1000)}>
        Decrease interval delay
      </button>
    </div>
  )
}
```



### `useInterval`

A declarative interval hook. The interval can be paused by setting the delay to `null`.

#### Usage

```jsx
import { createSignal } from 'solid-js';
import { useInterval } from 'solidjs-hooks';

const Demo = () => {
  const DEFAULT_DELAY = 1000;
  const [count, setCount] = createSignal(0);
  const [delay, setDelay] = createSignal(DEFAULT_DELAY);

  useInterval(() => {
    setCount((prevCount) => prevCount + 1);
  }, delay);

  const toggleInterval = () => {
    setDelay((prevDelay) => prevDelay ? null : DEFAULT_DELAY);
  }

  return (
    <div>
      <p>Count: {count()}</p>
      <div>
        <button onClick={() => toggleInterval()}>
          Toggle Interval
        </button>
      </div>
    </div>
  )
}
```



### `useNumber`

SolidJS state hook that tracks a numeric value.

This is an alias of [`useCounter`](#usecounter).



### `useState`

This is an alias of the built-in `createSignal` hook in SolidJS. 



### `useTimeout`

A declarative timeout hook. When the `delay` changes, it will rerun.

#### Usage

```jsx
import { createSignal } from 'solid-js';
import { useTimeout } from 'solidjs-hooks';

const Demo = () => {
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
  )
}
```



### `useTitle`

SolidJS side-effect hook that sets the title of the page.

#### Usage

```jsx
import { createSignal } from 'solid-js';
import { useTitle } from 'solidjs-hooks';

const Demo = () => {
  const [title, setTitle] = createSignal(document.title);

  // Also accepts a string instead of an Accessor.
  useTitle(title);

  return (
    <div>
      <p>Document title is: {title()}</p>
      <form>
        <label for="title">Change document title:</label>
        <input type="text" id="title" onChange={(e) => setTitle(e.currentTarget.value)}/>
      </form>
    </div>
  )
}
```



### `useToggle`

SolidJS state hook that tracks the value of a boolean.

`useBoolean` is an alias for `useToggle`.

#### Usage

```jsx
import { useToggle } from 'solidjs-hooks';

const Demo = () => {
  const [on, toggle] = useToggle();

  return (
    <div>
      <p>{on() ? "ON" : "OFF"}</p>
      <button onClick={() => toggle()}>Toggle</button>
      <button onClick={() => toggle(true)}>Turn On</button>
      <button onClick={() => toggle(false)}>Turn Off</button>
    </div>
  )
}
```



### `useWindowSize`

SolidJS sensor hook that tracks dimensions of the browser window.

#### Usage

```jsx
import { useWindowSize } from 'solidjs-hooks';

const Demo = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Window width: {width()}</p>
      <p>Window height: {height()}</p>
    </div>
  )
}
```