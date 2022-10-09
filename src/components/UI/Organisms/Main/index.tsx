import React, { useEffect, useState } from 'react';
import Loading from '../../Atoms/Loading';
import style from './style.module.css';

export default function Main({ children }: { children: React.ReactNode }) {
  let timer: any = null;
  const classeLoading =  [style.main, style.fadeIn].join(' ');
  
  const [loadingCount, seLoadingcount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [classes, setClasses] = useState<string>(classeLoading);

  useEffect(() => {
    timer = setInterval(() => {
      if (loadingCount === 100) {
        clearInterval(timer);
        setLoading(false);
        setClasses(style.main);
      } else {
        const LoadingSize = loadingCount + 1;
        seLoadingcount(LoadingSize);
      }
    }, 35);

    return () => {
      clearInterval(timer);
    };
  }, [loadingCount]);

  return (
    <main className={classes} tabIndex={3}>
      {loading ? <Loading completed={loadingCount}/> : children}
    </main>
  );
}
