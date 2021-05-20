export default (slug) => {
  let temp = slug.replace(/_/g, '-');
  temp = slug.replace(/--/g, '-');

  const characters = [];
  temp.split('-').forEach((c) => {
    characters.push(c.substr(0, 1).toUpperCase() + c.substr(1));
  });
  return characters.join(' ');
};
