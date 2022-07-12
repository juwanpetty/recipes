import { useEffect, useState } from "react";
import { debounce } from "lodash";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    // uses window.matchMedia to check if the document matches the media query string
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
    setIsMobile(window.matchMedia("(max-width: 490px)").matches);
  };

  useEffect(() => {
    // call function immediately so state gets
    // populated with initial window size
    setIsMobile(window.matchMedia("(max-width: 490px)").matches);
  }, []);

  useEffect(() => {
    // add event listener
    window.addEventListener("resize", debounce(handleResize, 250));

    // clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default useIsMobile;
