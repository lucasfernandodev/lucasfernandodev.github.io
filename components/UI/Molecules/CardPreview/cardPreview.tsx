import Link from "@/Utils/Link";
import Image from "next/image";
import style from './style.module.css';

type cardType = {
    link: string;
    image: string;
    title: string;
    techs?: Array<string>
}

const cardPreview = ({ link, image, title,techs = [], ...args }: cardType) => {
    return (
        <div className={style.card}>
            <div className={style['card-header']}>
                <Link href={link} className={style['card-wrapper']} target="_blank">
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
            <h3 className={style[`card-title`]}><a href={link} target="_blank" rel='noreferrer'>{title}</a></h3>
            <div className={style[`card-techs`]}>
                {techs.length > 0 ? techs.map((tech, index) => {
                    return (<span key={index} className={style[`tech ${tech}`]}>{tech}</span>)
                }): null}
                </div>
            </div>
        </div>
    )
};

export default cardPreview;