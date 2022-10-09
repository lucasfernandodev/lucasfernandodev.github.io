import style from './style.module.css';

interface SkipToContent{
  contentId?: string
}

export default function SkipToContent({
  contentId = '#mainContent',
}: SkipToContent){
  return (
    <a href={contentId} className={style.skipToContent} tabIndex={1}>
      Pular direto para conteúdo
    </a>
  )
}