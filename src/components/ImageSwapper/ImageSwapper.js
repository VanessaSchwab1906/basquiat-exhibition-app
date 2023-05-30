import { useEffect, useState } from "react";
import key1 from "../../assets/images/visual/key1.PNG";
import key2 from "../../assets/images/visual/key2.PNG";
import key3 from "../../assets/images/visual/key3.PNG";
import key4 from "../../assets/images/visual/key4.PNG";
import key5 from "../../assets/images/visual/key5.PNG";
import key6 from "../../assets/images/visual/key6.PNG";

const images = [key1, key2, key3, key4, key5, key6];

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
