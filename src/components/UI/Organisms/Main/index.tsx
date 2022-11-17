import React, { useEffect, useState } from 'react';
import Loading from '../../Atoms/Loading';
import style from './style.module.css';

export default function Main({ children }: { children: React.ReactNode }) {
  let timer: any = null;
  const classeLoading =  [style.main, style.fadeIn].join(' ');
  
  const duration = 2300; // Tempo em ms
  const [loading, setLoading] = useState(true);
  const [classes, setClasses] = useState<string>(classeLoading);


  timer = setTimeout(() => {
    setLoading(false)
    setClasses(style.main)
  }, duration)

  return (
    <main className={classes} tabIndex={3}>
      {loading ? <Loading duration={duration}/> : children}
    </main>
  );
}
