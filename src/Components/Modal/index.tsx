import React from 'react';
import style from './style.module.css';
import { IconArrowUpRight } from '@tabler/icons-react';

interface IModal {
  title: string,
  description: string,
  thumbnail: string,
  url: string,
  url_project: string,
  closeModal: () => void
}

export const Modal: React.FC<IModal> = ({ closeModal, title, description, thumbnail, url }) => {

  function _closeModal(){
    closeModal()
  }
  return (
    <div className={style.wrapper}>
      <div className={style.modal}>
        <header className={style.header}>
          <div className={style.info}>
            <h3 className={style.title}>{title}</h3>
            <p className={style.description}>{description}</p>
          </div>
          <button className={style.btnNext}>
            <a href={url} className={style.link}><IconArrowUpRight /></a>
          </button>
        </header>
        <main className={style.main}>
          <img src={thumbnail} alt={title} />
          <p className={style.message}>Conheça mais desse <a href="#">projeto</a> no github.</p>
        </main>
        <footer className={style.footer}>
          <button className={style.btn} onClick={_closeModal}>Fechar</button>
        </footer>
      </div>
    </div>
  )
}