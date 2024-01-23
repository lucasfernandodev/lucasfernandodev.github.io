import style from './style.module.css';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Link } from '../../Infra/Link';
import { useTranslation } from 'react-i18next';

interface IModal {
  title: string,
  description: string,
  preview_url: string;
  github_url: string;
  thumbnail: string;
  closeModal: () => void
}

export const Modal: React.FC<IModal> = ({ closeModal, title, description, thumbnail, github_url, preview_url }) => {

  function _closeModal() {
    closeModal()
  }

  const { t } = useTranslation()

  return (
    <div className={style.wrapper} data-type="modal">
      <div className={style.modal}>
        <header className={style.header}>
          <h3 className={style.title}>{title}</h3>
          {description.split("|").map(
            (content, id) => <p key={id} className={style.description}>{content}</p>
          )}
          <div className={style.container__button}>
            <button className={style.btnNext}>
              <Link href={preview_url} className={style.link}><IconArrowUpRight /></Link>
            </button>
          </div>
        </header>
        <main className={style.main}>
          <img src={thumbnail} alt={title} />
          <p className={style.message}>{t('projects.carousel.project_message')}
            <Link href={github_url}>github</Link>.</p>
        </main>
        <footer className={style.footer}>
          <button className={style.btn} onClick={_closeModal}>
            {t('projects.carousel.button_close_content')}
          </button>
        </footer>
      </div>
    </div>
  )
}