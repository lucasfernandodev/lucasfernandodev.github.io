import Icon from "@/Utils/Icon";
import styles from './style.module.css';

type CardFeatured  = {
    title: string,
    icon: string,
    content: string;
}

const CardFeatured = ({title, icon, content}: CardFeatured) => {
    return (
        <div className={styles.card}>
            <div className={styles['card-icon']}>
            <Icon icon={icon} width="34px" height="34px" />
            </div>
            <div className={styles['card-wrapper']}>
                <div className={styles['card-title']}>
                    <h3>{title}</h3>
                </div>
                <div className={styles['card-content']}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default CardFeatured;