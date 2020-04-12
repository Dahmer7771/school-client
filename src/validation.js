export const emailErrors = {
    required: "Email is required",
    pattern: "Invalid email",
};

export const nameErrors = {
    required: "Name is required",
    minLength: "Too short name",
    maxLength: "Too long name",
};

export const passwordErrors = {
    required: "Password is required",
    minLength: "Minimum password length 7 characters",
    maxLength: "Maximum password length 7 characters",
};

export const passwordConfirmErrors = {
    validate: "Passwords does not match",
};

export const gradeErrors = {
    pattern: "Invalid class name",
};

export const regExp = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    name: /^(\d*([a-zA-Zа-яА-Я]{1,})\d*\s*)*$/,
    grade: /^(\d*([a-zA-Zа-яА-Я-]{1,})\d*\s*)*$/,
    password: /^[A-Za-z0-9]+$/,
};
