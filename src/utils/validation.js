const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidPhone(value) {
  const trimmed = value.trim();
  if (!/^\+?[\d\s().-]+$/.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

export const isValidEmail = (value) => EMAIL.test(value.trim());

export const DESCRIPTION_MIN = 20;
export const DESCRIPTION_MAX = 2000;

export function validateEnquiry(values) {
  const errors = {};
  if (values.fullName.trim().length < 2) errors.fullName = 'Enter your full name.';
  if (!isValidEmail(values.email)) errors.email = 'Enter a valid email address.';
  if (!isValidPhone(values.phone)) errors.phone = 'Enter a valid phone number, including the area or country code.';
  if (!values.projectType) errors.projectType = 'Choose a type of project.';
  if (!values.budget) errors.budget = 'Choose an estimated budget.';
  const length = values.description.trim().length;
  if (length < DESCRIPTION_MIN) {
    errors.description = `Describe your project in at least ${DESCRIPTION_MIN} characters.`;
  } else if (length > DESCRIPTION_MAX) {
    errors.description = `Keep the description under ${DESCRIPTION_MAX} characters.`;
  }
  if (!values.contactMethod) errors.contactMethod = 'Choose how you would like to be contacted.';
  return errors;
}

export function validatePropertyEnquiry(values) {
  const errors = {};
  if (values.fullName.trim().length < 2) errors.fullName = 'Enter your full name.';
  if (!isValidPhone(values.phone)) errors.phone = 'Enter a valid phone number.';
  if (values.email.trim() && !isValidEmail(values.email)) errors.email = 'Enter a valid email address or leave it empty.';
  if (values.message.trim().length < 10) errors.message = 'Write a message of at least 10 characters.';
  return errors;
}
