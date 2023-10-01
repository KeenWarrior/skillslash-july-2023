import { Camera, CameraResultType } from "@capacitor/camera";
import { useRef, useState } from "react";

export default function CameraComponent() {
  const [imageUrl, setImageUrl] = useState(null);
  const imgRef = useRef(null);


  return (
    <div>
      <img ref={imgRef} src={imageUrl} alt="image" style={{ width: "100%" }} />
      <button
        onClick={async () => {
          const url = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: "dataUrl",
          });

          console.log(url);

          setImageUrl(url);
        }}
      >
        Take Photo
      </button>
    </div>
  );
}
