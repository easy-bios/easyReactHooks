import { useState, useEffect } from 'react';
import Joi from 'joi';

const useJoiState = (validation, init) => {
  const [value, setValue] = useState(init);
  const [valueV, setValueV] = useState();
  const [valid, setValid] = useState();
  const schema = Joi.object(validation);

  const validate = (input) => {
    const { error, value } = schema.validate(input);
    setValue(input);
    setValueV(value);
    if (error) {
      setValid(error.details[0].message);
    } else setValid(true);
  };

  useEffect(() => {
    validate(init);
  }, []);

  return [value, validate, valid, valueV];
};

export default useJoiState;
