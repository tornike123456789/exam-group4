import { useState, useEffect } from "react";

// Hook for handling forms
const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    console.log("qweqweqweqw");
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log("qweqweqwe");
      callback(values);
    }
  }, [errors]);
  return {
    handleChange,
    handleSubmit,
    values,
    setValues,
    errors,
  };
};

export default useForm;
