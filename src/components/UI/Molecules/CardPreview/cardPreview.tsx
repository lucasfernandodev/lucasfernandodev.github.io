import Link from "src/components/Utils/Link";
import Image from "next/image";
import style from "./style.module.css";
import Button from "../../Atoms/Button";

type cardType = {
  link: string;
  image: string;
  title: string;
  description: string;
};

const cardPreview = ({ link, image, title, description , ...args }: cardType) => {
  return (
    <div className={style.card}>
      <div className={style["card-header"]}>
        <Image
          src={image}
          width={330}
          height={190}
          alt={title}
          layout="responsive"
          className={style["card-image"]}
        />
      </div>

      <div className={style["card-main"]}>
        <h3 className={style[`card-title`]}>
            {title}
        </h3>
        <div className={style[`card-description`]}>
          {description}
        </div>
        <Button to={link} height="sm">Visitar</Button>
      </div>
    </div>
  );
};

export default cardPreview;
