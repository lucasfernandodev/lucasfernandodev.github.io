import style from './style.module.css';

export const TechPanel = () => {
  return (
    <div className={style.container}>
      <div className={style.card}><img src="/tech/js.svg" alt="" className={style.icon} /></div>
      <div className={style.card}><img src="/tech/react.svg" alt="" className={style.icon} /></div>
      <div className={style.card}><img src="/tech/ts.svg" alt="" className={style.icon} /></div>
      <div className={style.card}><img src="/tech/html.svg" alt="" className={style.icon} /></div>
      <div className={style.card}><img src="/brand.svg" alt="" className={style.icon} /></div>
      <div className={style.card}><img src="/tech/github.svg" alt="" className={style.icon} /></div>
      <div className={style.card}><img src="/tech/css.svg" alt="" className={style.icon} /></div>
      <div className={style.card}><img src="/tech/nodejs.svg" alt="" className={style.icon} /></div>
      <div className={style.card}><img src="/tech/next.svg" alt="" className={style.icon} /></div>
    </div>
  )
}