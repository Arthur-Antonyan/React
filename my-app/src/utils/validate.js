export const required = (value) => {
  if (!value) return 'Required field';
  return undefined;
};

export const maxLength = (maxLength) => (value) => {
  if (value.length > maxLength) return `max length is ${maxLength} symbols`;
  return undefined;
};
