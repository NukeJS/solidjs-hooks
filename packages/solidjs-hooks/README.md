# solid-hooks

A collection of useful SolidJS hooks.

## Installation

```bash
# Using NPM
npm install solid-hooks
# Using Yarn
yarn add solid-hooks
```

## Usage

### `useBoolean`

SolidJS state hook that tracks the value of a boolean.

This is an alias of [`useToggle`](#usetoggle).



### `useCounter`

SolidJS state hook that tracks a numeric value.

`useNumber` is an alias for `useCounter`.

#### Usage

```jsx
import { useCounter } from 'solid-hooks';

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
      <button onClick={() => reset(25)}>Reset to 25</button>
    </div>
  )
}
```



### `useNumber`

SolidJS state hook that tracks a numeric value.

This is an alias of [`useCounter`](#usecounter).



### `useToggle`

SolidJS state hook that tracks the value of a boolean.

`useBoolean` is an alias for `useToggle`

#### Usage

```jsx
import { useToggle } from 'solid-hooks';

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