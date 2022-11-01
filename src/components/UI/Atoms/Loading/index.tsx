import style from './style.module.css';

export default function Loading({ duration }: { duration: number }) {
  return (
    <div className={style.loading}>
      <div
        className={style.indicator}
        style={{ '--duration': `${duration}ms`} as any}
      ></div>
    </div>
  );
}
