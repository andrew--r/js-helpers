// 

const castArray = (value) => [].concat(value);

export default function objectToSearchParams(params = {}) {
  const keys = Object.keys(params);
  const entries = keys.map((key) => {
    const values = castArray(params[key]);

    return values
      .map((value) => [key, value].map(encodeURIComponent).join('='))
      .join('&');
  });
  const result = entries.join('&');

  return result && `?${result}`;
}
