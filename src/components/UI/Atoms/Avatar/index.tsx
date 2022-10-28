import style from "./style.module.css";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className={style.avatar}>
      <div className={style.wrapper}>
        <Image
          src="/imagens/Photo-Lucas-Fernando-Dev.png"
          width={340}
          height={350}
          alt="Imagem mostrando o rosto de Lucas Fernando"
         
        />
      </div>
    </div>
  );
};

export default Avatar;
