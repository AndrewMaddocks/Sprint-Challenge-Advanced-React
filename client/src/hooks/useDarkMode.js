import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage("darkmode key");

  useEffect(() => {
    if (value === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [value]);
  return [value, setValue];
};
