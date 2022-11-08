import style from "./style.module.css";
import Link from "@/infra/Link";
import { Route, RouteProps } from "@/infra/routes/default";
import { useRouter } from "next/router";
import { ButtonThemeSwitch } from "../../Molecules/ButtonThemeSwitch";

type NavigationProps = {
  visibility?: boolean;
};

const Navigation: React.FC<NavigationProps> = ({ visibility }) => {
  const { asPath } = useRouter();

  return (
    <nav className={style.navigation} data-show={visibility}>
      
      <ul>
        {Object.values(Route).map((route: RouteProps) => {
          const Icon = route.icon;
          const isActive = asPath === route.path ? true : false;

          return (
            <li key={route.displayName}>
              <Link
                href={route.path}
                aria-label={route.displayName}
                data-active={isActive}
              >
                <Icon className={style.icon} />
              </Link>
            </li>
          );
        })}
      </ul>
      <ButtonThemeSwitch state="dark" label style={{
        position: "static"
      }}/>
    
    </nav>
  );
};

export default Navigation;
