import style from './style.module.css';

export const LoadingTemplate = () => {
  return (
    <div id="root">
    <div className={style.loading}>
      <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={style.path} d="M14.3564 0L28.2128 24H0.5L14.3564 0Z" />
      </svg>
    </div>
  </div>
  )
}