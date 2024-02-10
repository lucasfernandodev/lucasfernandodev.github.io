import style from './style.module.css';
import { Layout } from "../../Layout"
import { GroupButton } from '../../GroupButton';
import { Link } from '../../../Infra/Link';
import { Button } from '../../Button';
import { IconArrowNarrowLeft, IconArrowUpRight, IconChevronRight } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

interface IProjectOpenTemplateProps {
  id: string
}

export const ProjectOpenTemplate: React.FC<IProjectOpenTemplateProps> = ({ id }) => {

  const { t } = useTranslation()

  const backgroundImage = t(`projects:${id}.image_url`);
  return (
    <Layout className={style.layout}>
      <div className={style.thumbnail}>
        <h2>{t(`projects:${id}.title`)}</h2>
      </div>
      <div className={style.container}>
        <div className={style.col}>
          <div>
            <h3>O que foi feito</h3>
            <p>O SpaceTravel é um site desenvolvido usando react e typescript buscando implementar responsividade, animações e claro acessibilidate.</p>
          </div>
          <div>
            <h3>Contexto</h3>
            <p>
              Esse é um desafio front-end mentor para desenvolver uma site multi-paginas.
            </p>
          </div>
          <GroupButton>
            <Link href="https://github.com/lucasfernandodev">
              <Button>
                Dar um olhada
                <IconChevronRight />
              </Button>
            </Link>
            <Link href="https://github.com/lucasfernandodev">
              <Button type="secondary">Github <IconArrowUpRight /></Button>
            </Link>
          </GroupButton>
        </div>

        <div className={style.col}>
          <div className={style.col__thumbnail}
          style={{backgroundImage: `url(${backgroundImage})`}}
          ></div>
        </div>
      </div>
      <div className={style.footer}>
        <Link href="/projetos">
          <IconArrowNarrowLeft />
          <span>Dê volta para projetos</span>
        </Link>
    </div>
    </Layout>
  )
}