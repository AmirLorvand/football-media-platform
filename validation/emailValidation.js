//Validation check for an email address
export function validateEmail(value) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(String(value).toLowerCase());
}
