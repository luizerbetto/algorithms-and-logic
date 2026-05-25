function validatePassword(password) {
  return password.length >= 8;
}

console.log(validatePassword("12345678"));