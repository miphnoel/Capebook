export const requiredName = value => (value ? undefined : 'What\'s your (real) name?');

export const minLength = min => value => (
  value && value.length < min ? `Must be ${min} characters or more` : undefined
);

export const email = value =>(
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Please enter a valid email address'
    : undefined
);

export const phoneNumber = value => (
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined
);
