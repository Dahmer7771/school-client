interface ValidationError {[key: string]: string }

export const emailErrors: ValidationError = {
    required: "Email is required",
    pattern: "Invalid email",
};

export const nameErrors: ValidationError = {
    required: "Name is required",
    minLength: "Too short name",
    maxLength: "Too long name",
};

export const passwordErrors: ValidationError = {
    required: "Password is required",
    minLength: "Minimum password length 7 characters",
    maxLength: "Maximum password length 7 characters",
};

export const passwordConfirmErrors: ValidationError = {
    match: "Passwords does not match",
};
