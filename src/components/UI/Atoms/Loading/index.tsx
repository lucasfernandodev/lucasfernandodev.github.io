import style from './style.module.css';

export default function Loading({ completed }: { completed: number }) {
  return (
    <div className={style.loading}>
      <div
        className={style.indicator}
        style={{ width: `${completed}%` }}
      ></div>
    </div>
  );
}
