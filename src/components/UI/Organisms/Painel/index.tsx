import Link from '@/infra/Link';
import Image from 'next/image';
import { Github, ExternalLink } from 'umbrella-icons-library';
import { Button } from '../../Atoms/Button';
import style from './style.module.css';

interface PainelProps{
  title: string;
  description: string,
  preview: string,
  repository: string
  imageSource: string
}

export const Painel: React.FC<PainelProps> = ({
  title,
  description,
  preview,
  repository,
  imageSource
}) => {
  return (
    <div className={style.painel}>
      <div className={style['painel-details']}>
        <div className={style.content}>
          <h3 className={style.title}>
            {title}
          </h3>
          <p className={style.description}>
            {
              description
            }
          </p>
          <div className={style.groupButtons}>
            <Button.Root appearance='dark' asChild>
              <Link href={repository}>
              <Button.Icon>
                <Github />
              </Button.Icon>
              Repositório
              </Link>
            </Button.Root>

            <Button.Root asChild theme='link'>
              <Link href={preview} target="_blank">
              Espiar
              <Button.Icon>
                <ExternalLink />
              </Button.Icon>
              </Link>
            </Button.Root>
          </div>
        </div>
      </div>
      <div className={style['painel-preview']}>
        <Image src={imageSource} width={1366} height={756} alt={title}/>
      </div>
    </div>
  )
}