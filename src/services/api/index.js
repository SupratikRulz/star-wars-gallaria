const service = {
  get: async (url, options = {}) => {
    const response = await fetch(url, options).catch(err => console.log(err));
    const data  = await response && response.json();
    return data;
  }
};

export { service };
