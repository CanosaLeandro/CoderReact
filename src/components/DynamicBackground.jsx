import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const DynamicBackground = () => {
  const [backgroundImage, setBackgroundImage] = useState("background.jpg");
  const history = useHistory();

  useEffect(() => {
    const handleRedirect = () => {
      const url =
        history.location.pathname === "catalog"
          ? "catalog-background.jpg"
          : "background.jpg";
      setBackgroundImage(url);
    };

    const unlisten = history.listen(handleRedirect);

    return () => {
      unlisten();
    };
  }, [history]);
};

export default DynamicBackground;
