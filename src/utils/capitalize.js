const capitalize = (phrase) => {
  const words = phrase.split(' ');

  const capitalizedPhrase = words.map((word) => (
    word[0].toUpperCase() + word.substring(1)
  )).join(' ');

  return capitalizedPhrase;
};

export default capitalize;
