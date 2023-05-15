import { useEffect, useState } from "react";
import key1 from "../assets/key_1.png";
import key2 from "../assets/key_2.png";

const images = [key1, key2];

export default function ImageSwapper() {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img src={currentImage} alt={""} />
    </div>
  );
}
