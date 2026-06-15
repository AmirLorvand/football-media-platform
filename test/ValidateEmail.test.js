// Import the 'expect' function from the Chai library for assertion
import { expect } from 'chai';

// Import the validateEmail function from the emailValidation.js file
import { validateEmail } from '../validation/emailValidation.js';

// Describe block for the validateEmail function
describe('validateEmail function', () => {
  // Test case: should return true if the email is valid
  it('should return true if the email is valid', () => {
    // Define an array of valid email addresses
    const validEmails = [
      'َAmirLorvand@gmail.com',
      'user@domain.com',
      'test123@test.com',
    ];

    // Iterate through each valid email address
    validEmails.forEach((email) => {
      // Assert that the validateEmail function returns true for each valid email address
      expect(validateEmail(email)).to.be.true;
    });
  });

  // Test case: should return false if the email is invalid
  it('should return false if the email is invalid', () => {
    // Define an array of invalid email addresses
    const invalidEmails = ['example@', 'user@domain', 'test123@test'];

    // Iterate through each invalid email address
    invalidEmails.forEach((email) => {
      // Assert that the validateEmail function returns false for each invalid email address
      expect(validateEmail(email)).to.be.false;
    });
  });

  // Test case: should return false if the input is not a string
  it('should return false if the input is not a string', () => {
    // Define an array of non-string inputs
    const nonStringInputs = [123, true, null, undefined, {}];

    // Iterate through each non-string input
    nonStringInputs.forEach((input) => {
      // Assert that the validateEmail function returns false for each non-string input
      expect(validateEmail(input)).to.be.false;
    });
  });
});
