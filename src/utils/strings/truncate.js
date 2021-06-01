export default (str, truncateAt, useWordBoundary) => {
  const sliceBoundary = (sliced) => sliced.substr(0, sliced.lastIndexOf(' '));

  const result =
    str.length <= truncateAt
      ? str
      : `${
          useWordBoundary
            ? sliceBoundary(str.slice(0, truncateAt - 1))
            : str.substr(0, truncateAt - 1)
        }&hellip;`;

  return result;
};
