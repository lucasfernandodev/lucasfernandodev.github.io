import Link from "@/infra/Link";
import Image from "next/image";
import style from "./style.module.css";
import {ButtonRoot} from "../../Atoms/Button/root";

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
          alt={title}
          className={style["card-image"]}
          quality={99}
          width={550}
          height={1024}
        />
      </div>

      <div className={style["card-main"]}>
        <h3 className={style[`card-title`]}>
            {title}
        </h3>
        <div className={style[`card-description`]}>
          {description}
        </div>
        <ButtonRoot theme="normal" appearance="dark">
          <Link href={link} target="_blank">
          Visitar
          </Link>
        </ButtonRoot>
      </div>
    </div>
  );
};

export default cardPreview;
