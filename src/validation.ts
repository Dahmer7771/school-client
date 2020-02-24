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
    validate: "Passwords does not match",
};

export const regExp = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    name: /^(\d*([a-zA-Z]{1,})\d*)*$/,
    password: /^[A-Za-z0-9]+$/,
};
