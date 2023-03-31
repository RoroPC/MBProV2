import { useState, useEffect } from "react";
const orientationType = window.screen.orientation.type;
function useScreenOrientation() {
  const [orientation, setOrientation] = useState(orientationType);

  useEffect(() => {
    function handleOrientationChange() {
      setOrientation(orientationType);
    }

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return orientation;
}

export default useScreenOrientation;
