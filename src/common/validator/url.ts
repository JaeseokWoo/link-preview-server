const URL_VALIDATION_REG =
  /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i;

function urlValidator(url: string) {
  return URL_VALIDATION_REG.test(url);
}

export default urlValidator;
