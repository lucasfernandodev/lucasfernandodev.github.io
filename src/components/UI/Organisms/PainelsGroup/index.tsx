import { IProjectsList } from "src/types/ProjectsList";
import { Painel } from "../Painel";
import style from "./style.module.css";

interface PanelsGroupProps {
  list: IProjectsList[];
}

export function PanelsGroup({ list }: PanelsGroupProps) {
  return (
    <div className={style.groupPanels}>
      {list.map((item) => {
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
  );
}
