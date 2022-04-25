import {
  useState, useEffect, Dispatch, SetStateAction,
} from 'react';

// 函式回傳值型別
type ReturnType<T> = [
  T | undefined,
  Dispatch<SetStateAction<T>>,
]

const useLocalStorage = <T, >(key: string, initialValue?: T): ReturnType<T> => {
  const [state, setState] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (state) {
      try {
        window.localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.log(error);
      }
    }
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
