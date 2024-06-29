export const getOrSetLocalStorage = (name, value) => {

    const existingValue = localStorage.getItem(name);
  
    if (existingValue) {
      return existingValue;
    }
  
    localStorage.setItem(name, value);
    return value;

  }