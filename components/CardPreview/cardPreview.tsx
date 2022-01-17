import Link from "@/Utils/Link";
import Image from "next/image";
import style from './style.module.css';

type cardType = {
    link: string;
    image: string;
    title: string;
    Key: any
}

const cardPreview = ({ link, image, title, Key}: cardType) => {
    return (
        <div className={style.card}>
            <div className={style['card-header']}>
                <Link href={link} className={style['card-wrapper']}>
                    <Image src={image}
                        width={400}
                        height={220}
                        alt={title}
                        aria-label={title}
                        layout="responsive"
                        className={style['card-image']}
                    />
                </Link>
            </div>

            <div className={style['card-main']}>
                <h3 className={style['card-title']}>{title}</h3>
            </div>
        </div>
    )
};

export default cardPreview;