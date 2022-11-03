import { Slot } from "@radix-ui/react-slot";
import style from "./style.module.css";

export const ButtonIcon: React.FC = ({children}) => <Slot className={style.icon}>{children}</Slot>