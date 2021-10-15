# easyReactHooks
More React Hooks for everyday use. 👍


## useLocalStorage
Save State to local Storage.
```javascript
const [value, setValue] = useLocalStorage(localStorageKey, initValue);
```
Any setValue saves the value to the localStorage.
On initializing first the localStorage is read and if empty the init value.

## useJoiState
States with input validation, based on Joi:
https://www.npmjs.com/package/joi
```javascript
const [mail, setMail, mailValid] = useJoiState(
  {
    Email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
  },
  initialValue
);
```
https://codepen.io/easy-bios/pen/KKvVwdv
