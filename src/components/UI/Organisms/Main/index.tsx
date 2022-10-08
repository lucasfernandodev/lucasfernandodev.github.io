import React, { useEffect, useState } from 'react';
import style from './style.module.css';

export default function Main({children}: {children: React.ReactNode}){
  let timer: any = null;
  const [loadingCount, seLoadingcount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [classes, setClasses] = useState<string>([style.main, style.fadeIn].join(' '))

  useEffect(() => {

    timer = setInterval(() => {

      if(loadingCount === 100){
        clearInterval(timer)
        setLoading(false)
        setClasses(style.main)
      }else{
        const LoadingSize = loadingCount + 1
        seLoadingcount(LoadingSize)
      }
    }, 35)

    return () => {
      clearInterval(timer);
    }
  }, [loadingCount])

  return (
    <main className={classes}>
      {loading && 
      <div className={style.loading}>
        <div className={style.loadingThumb} style={{width: `${loadingCount}%`}}></div>
      </div>
      }
      {children}
    </main>
  )
}