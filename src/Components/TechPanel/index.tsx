import style from './style.module.css';

export const TechPanel = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img src="/tech/js.svg" alt="Javascript" className={style.icon} />
      </div>
      <div className={style.card}>
        <img src="/tech/react.svg" alt="React" className={style.icon} />
      </div>
      <div className={style.card}>
        <img src="/tech/ts.svg" alt="Typescript" className={style.icon} />
      </div>
      <div className={style.card}>
        <img src="/tech/html.svg" alt="HTML5" className={style.icon} />
      </div>
      <div className={style.card}>
        <img src="/brand.svg" alt="Lucas Fernando - Portfolio" className={style.icon} />
      </div>
      <div className={style.card}>
        <img src="/tech/github.svg" alt="Github" className={style.icon} />
      </div>
      <div className={style.card}>
        <img src="/tech/css.svg" alt="Css" className={style.icon} />
      </div>
      <div className={style.card}>
        <img src="/tech/nodejs.svg" alt="Node" className={style.icon} />
      </div>
      <div className={style.card}>
        <img src="/tech/next.svg" alt="Next" className={style.icon} />
      </div>
    </div>
  )
}