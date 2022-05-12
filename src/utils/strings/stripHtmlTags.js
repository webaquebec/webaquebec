/**
 * Strip all HTML tags or from a list of restricted tags into a string
 */
export default (string, options = { unwantedTags: [] }) => {
  const unwantedTags = options.unwantedTags.join('|');
  const regexUnwantedTags = unwantedTags ? `(/?${unwantedTags})` : ``;
  const regex = new RegExp(`(<${regexUnwantedTags}([^>]+)?>)`, 'gi');

  return string.replace(regex, '');
};
