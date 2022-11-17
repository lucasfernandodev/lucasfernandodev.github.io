import { Slot } from "@radix-ui/react-slot";
import style from "./style.module.css";

export const ButtonIcon: React.FC = ({ children, ...args }) => (
  <Slot className={style.icon} {...args}>
    {children}
  </Slot>
);
