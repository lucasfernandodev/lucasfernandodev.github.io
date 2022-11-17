import { Home, User, Code, Send } from "umbrella-icons-library";
type routes = 'home' | 'me' | 'projects' | 'contact';

export interface RouteProps{
  path: string,
  displayName: string,
  icon: React.ForwardRefExoticComponent<any>
}

export const Route: Record<routes, RouteProps> = {
  home: {
    path: '/',
    displayName: 'Inicio',
    icon: Home
  },
  me: {
    path: '/me',
    displayName: 'Sobre mim',
    icon: User
  },
  projects: {
    path: '/projects',
    displayName: 'Projetos',
    icon: Code
  },
  contact: {
    path: '/contact',
    displayName: 'Contato',
    icon: Send
  },
}