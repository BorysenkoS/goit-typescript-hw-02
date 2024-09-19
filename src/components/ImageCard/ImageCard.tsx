import { Photo } from "../types";
import css from "./ImageCard.module.css";

interface image {
  url: {
    regular: string;
    small: string;
  };
  alt: string;
  openModal: () => void;
  setOnPhoto: (photo: Photo) => void;
}

const ImageCard: React.FC<image> = ({ url, alt, openModal, setOnPhoto }) => {
  const handleClick = () => {
    setOnPhoto({ url: url.regular, alt });
    openModal();
  };
  return (
    <div onClick={handleClick} className={css.wrapper}>
      <img
        className={css.photo}
        src={url.small}
        alt={alt}
        width={320}
        height={220}
      />
    </div>
  );
};

export default ImageCard;
