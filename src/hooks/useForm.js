import { useState } from 'react';

/** Small form state helper: validates on submit, then live while correcting. */
export function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function onChange(event) {
    const { name, value } = event.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (submitted) setErrors(validate(next));
  }

  /** Returns true when valid; otherwise focuses the first invalid field. */
  function check(form) {
    const found = validate(values);
    setErrors(found);
    setSubmitted(true);
    const first = Object.keys(found)[0];
    if (first) form.querySelector(`[name="${first}"]`)?.focus();
    return !first;
  }

  function reset() {
    setValues(initialValues);
    setErrors({});
    setSubmitted(false);
  }

  return { values, errors, onChange, check, reset };
}
