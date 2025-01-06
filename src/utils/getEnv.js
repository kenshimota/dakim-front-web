/**
 * @param {String} key
 * @returns {String | null}
 */
function getEnv(key) {
  const keys = import.meta.env || {};
  const value = keys[key] || null;
  return value || null;
}

export default getEnv;
