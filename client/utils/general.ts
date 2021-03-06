export const formatPhoneNumber = str => {
  //Filter only numbers from the input
  const cleaned = ('' + str).replace(/\D/g, '');

  //Check if the input is of correct length
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }

  return null;
};

export const trimText = (text, length) => {
  if (text.length > length) {
    return `${text.substring(0, length)}...`;
  }

  return text;
};
