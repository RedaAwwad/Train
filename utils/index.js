/**
 * This folder for any reusable js code
 */

/**
 * Validate Email value using regex email pattern
 * @param {String} value
 * @returns {Boolean}
 */
export const validateEmail = (value) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(value);
};

/**
 * objetc deep copy
 * @param {Object} obj
 * @returns {Object}
 */
export const objectDeepCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Formate axios error
 * @param {string} error 
 */
export const formatError = (error) => {
  if (error.response) {
    return {
      status: error.response.status,
      data: error.response.data
    }
  } else if (error.request) {
    return {
      status: 500,
      data: error.request
    }
  } else {
    return {
      status: 500,
      data: error.message
    }
  }
}



