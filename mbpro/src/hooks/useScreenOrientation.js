import { useState, useEffect } from "react";

function useScreenOrientation() {
  function orientationType() {
    return window.screen.orientation.type;
  }
  const [orientation, setOrientation] = useState(orientationType());

  useEffect(() => {
    function handleOrientationChange() {
      setOrientation(orientationType());
    }
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return orientation;
}

export default useScreenOrientation;
