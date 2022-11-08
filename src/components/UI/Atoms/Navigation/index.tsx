import style from "./style.module.css";
import Link from "@/infra/Link";
import { Route, RouteProps } from "@/infra/routes/default";

type NavigationProps = {
  visibility?: boolean;
};

const Navigation: React.FC<NavigationProps> = ({ visibility }) => {
  return (
    <nav className={style.navigation} data-show={visibility}>
      <ul>
        {Object.values(Route).map((route: RouteProps) => {
          const Icon = route.icon;
          return (
            <li>
              <Link
                href={route.path}
                aria-label={route.displayName}
                data-active="false"
              >
                <Icon className={style.icon} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
