// Validate email address format
export const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

// Validate password requirements (min 6 characters)
export const validatePassword = (password) => {
  return password && password.length >= 6;
};

// Validate basic contact inputs
export const validateContactForm = (name, email, message) => {
  const errors = {};
  if (!name.trim()) errors.name = 'Name is required';
  if (!validateEmail(email)) errors.email = 'Valid email is required';
  if (!message.trim()) errors.message = 'Message cannot be empty';
  return errors;
};
