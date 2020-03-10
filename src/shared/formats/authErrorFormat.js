export const EMAIL_EXISTS = {
    error: 'EMAIL_EXISTS',
    updated: 'E-posten finnes allerede'
};
export const EMAIL_NOT_FOUND = {
    error: 'EMAIL_NOT_FOUND',
    updated: 'E-posten er ikke registrert'
};
export const INVALID_PASSWORD = {
    error: 'INVALID_PASSWORD',
    updated: 'Ugyldig passord'
};
export const USER_DISABLED = {
    error: 'USER_DISABLED',
    updated: 'Brukeren er stengt'
};
export const NOT_VERIFIED = {
    error: 'NOT_VERIFIED',
    updated: 'Bruker ikke bekreftet'
};

export const authMapError = error => {
    switch (error.message) {
        case EMAIL_EXISTS.error:
            return EMAIL_EXISTS.updated;
        case EMAIL_NOT_FOUND.error:
            return EMAIL_NOT_FOUND.updated;
        case INVALID_PASSWORD.error:
            return INVALID_PASSWORD.updated;
        case USER_DISABLED.error:
            return USER_DISABLED.updated;
        case NOT_VERIFIED.error:
            return NOT_VERIFIED.updated;
        default:
            return 'Det oppstod en feil';
    }
};
