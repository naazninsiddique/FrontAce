import React, { useEffect, useState } from "react";
function useLocalStorage(key, initialvalue) {
  //"" ->initial value // custom hook function
  // custom hook fn useLocalstorage() behave like a useState()
  const [storedvalue, setstoredvalue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (!item) {
        return initialvalue;
      }
      const parseItem = JSON.parse(item);
      return Array.isArray(parseItem) ? parseItem : initialvalue;
    } catch (error) {
      console.error("error", key, error);
      return initialvalue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedvalue));
    } catch (error) {
      console.error("error", key, error);
    }
  }, [key, storedvalue]); //dependecy array[]
  return [storedvalue, setstoredvalue];
}
export default useLocalStorage;
