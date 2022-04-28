import { AuthErrorCodes } from 'firebase/auth';

// Custom error message
const ErrorMessage = {
  invalidEmail: 'Invalid email format.',
  userNotFound: 'Your email is wrong.',
  wrongPassword: 'Your password is wrong.',
  tooManyRequests: 'Please try again later',
  weakPassword: 'Your password length must be greater than six.',
  emailAlreadyInUse: 'This email has already been used.',
};

// Return custom error message based on error type
const errorHandler = (message: string): string => {
  const regex = /\(([a-z]+\/[a-z-]+)\)/;
  const result = message.match(regex);
  if (result) {
    switch (result[1]) {
      case AuthErrorCodes.INVALID_EMAIL:
        return ErrorMessage.invalidEmail;
      case AuthErrorCodes.USER_DELETED:
        return ErrorMessage.userNotFound;
      case AuthErrorCodes.INVALID_PASSWORD:
        return ErrorMessage.wrongPassword;
      case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
        return ErrorMessage.tooManyRequests;
      case AuthErrorCodes.WEAK_PASSWORD:
        return ErrorMessage.weakPassword;
      case AuthErrorCodes.EMAIL_EXISTS:
        return ErrorMessage.emailAlreadyInUse;
      default:
        return result[1];
    }
  } else {
    return 'message';
  }
};

export default errorHandler;
