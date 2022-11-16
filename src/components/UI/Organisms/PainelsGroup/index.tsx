import { projectsListItemType } from '@/infra/Store/websites/list';
import { Painel } from '../Painel';
import style from './style.module.css';

interface PanelsGroupProps{
  list: projectsListItemType[]
}

export function PanelsGroup({list}: PanelsGroupProps){
  return(
    <div className={style.groupPanels}>
    {list.map((item: projectsListItemType) => {
      return (
        <Painel
          key={item.title}
          description={item.description}
          imageSource={item.image}
          preview={item.link}
          repository={item.repo}
          title={item.title}
        />
      );
    })}
  </div>
  )
}