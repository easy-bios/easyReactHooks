import { useState } from 'react';
import Joi from 'joi';

const useJoiState = (validation, init) => {
    const [value, setValue] = useState(init);
    const [valueV, setValueV] = useState(init);
    const [valid, setValid] = useState(true);

    const schema = Joi.object(validation);

    const validate = (input) => {
        const { error, value } = schema.validate({
            [Object.keys(validation)[0]]: input,
        });
        setValue(input);
        setValueV(value[Object.keys(validation)[0]]);
        if (error) {
            setValid(error.details[0].message);
        } else setValid(true);
    };

    return [value, validate, valid, valueV];
};

export default useJoiState;
