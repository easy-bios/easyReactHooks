# easyReactHooks
More React Hooks for everyday use. 👍\
Try it on CodePen: https://codepen.io/easy-bios/pen/KKvVwdv

## install
`npm i easy-react-hooks`

## useLocalStorage
Save State to local Storage.
```javascript
import { useLocalStorage } from 'easy-react-hooks';

const [value, setValue] = useLocalStorage(localStorageKey, initValue);
```
Any setValue saves the value to the localStorage.
On initializing first the localStorage is read and (if empty) then the initial value.

## useJoiState
States with input validation, based on Joi:
https://www.npmjs.com/package/joi
```javascript
import { useJoiState, Joi } from 'easy-react-hooks';

const [mail, setMail, mailValid, validatedValue] = useJoiState(
  {
    Email: Joi.string()
    .email({ tlds: { allow: false } })
    .case("lower")
    .trim()
  },
  initialValue
);
```
The "validetedValue" in this case is the "value" but trimmed and lower case as specified by our Joi Scheme.
