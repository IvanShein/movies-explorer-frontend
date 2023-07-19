const REGEXP_EMAIL =/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const REGEXP_URL = /https?(:\/\/)(www\.)?[a-z\d-]+\.[\d\w\-._~:/?#[\]@!$&'()*+,;=]{2,}#?/i;

export {
    REGEXP_EMAIL,
    REGEXP_URL,
};