# easyReactHooks

More React Hooks for everyday use. 👍\
Try it on CodePen: https://codepen.io/easy-bios/pen/KKvVwdv

## the Hooks

1. useLocalStorage
2. useJoiState
3. useDebouncedState
4. useDebouncedEffect

---

## install

`npm i easy-react-hooks`

---

## useLocalStorage

`const [state, setState] = useLocalStorage(key, init);`

Save State to local Storage.

Any setValue saves the value to the localStorage.
On initializing first the localStorage is read and (if empty) then the initial value.

```javascript
import { useLocalStorage } from 'easy-react-hooks';

const [value, setValue] = useLocalStorage('my_key', 'initial Value');
```

---

## useJoiState

`const [state, setState, valid, validationMessage] = useJoiState(joiObject, init);`

States with input validation, based on Joi: https://www.npmjs.com/package/joi

```javascript
import { useJoiState, Joi } from 'easy-react-hooks';

const [validationValues, setValidationValues, validation, validatedValues] =
  useJoiState(
    {
      Email: Joi.string()
        .trim()
        .lowercase()
        .email({ tlds: { allow: false } }),
      Number: Joi.number().min(5).max(100).multiple(3),
    },
    { Email: 'me@example.com', Number: 111 }
  );
```

---

## useDebouncedState

`const [state, setState, debouncedState] = useDebouncedState(init, delay=1000)`

Will set the state + give you a debounced value of this state.

```javascript
const [notDeboucedState, setDebouncedState, deboucedState] = useDebouncedState(
  'initial value',
  500
);
```

---

## useDebouncedEffect

`useDebouncedEffect(fn, deps=undefined, delay=1000)`

A useEffect that is debounced by X ms.

```javascript
useDebouncedEffect(
  () => {
    console.log('something updated!');
  },
  [],
  500
);
```
