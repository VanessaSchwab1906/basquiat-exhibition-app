import { useEffect, useState } from "react";
// import key1 from "../../assets/images/visual/key_1.png";
// import key2 from "../../assets/images/visual/key_2.png";
import key3 from "../../assets/images/visual/key_3.png";
import key4 from "../../assets/images/visual/key_4.png";
import key5 from "../../assets/images/visual/key_5.png";

const images = [key3, key4, key5];

export default function ImageSwapper() {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img
        src={currentImage}
        alt={"animated Portrait of Jean-Michel Basquiat"}
        style={{ width: "380px", height: "auto" }}
      />
    </div>
  );
}
