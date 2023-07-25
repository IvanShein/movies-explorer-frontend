import { useState, useCallback } from 'react';
import validator from 'validator';

function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    
    if (name === "email" && !validator.isEmail(value)) {
        target.setCustomValidity("Введите корректный email");
    }
    else if (name === "name" && !validator.matches(value, /^[a-zA-Zа-яА-ЯёЁ\s\-]+$/i)) {
        target.setCustomValidity("Имя может содержать только латиницу, кириллицу, пробел или дефис");
    }
    else {
        target.setCustomValidity("");
    }
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsFormValid(event.target.closest("form").checkValidity());
    // console.log("form-validator: ", values);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
    },
    [setValues, setErrors, setIsFormValid]
  );

  return {
    values,
    handleChange,
    errors,
    isFormValid,
    resetForm,
  };
};

export default useFormWithValidation;