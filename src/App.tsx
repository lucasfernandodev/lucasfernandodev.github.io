import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Homepage } from './Pages/Homepage'
import { About } from './Pages/About'
import { Tech } from './Pages/Tech';
import { Projects } from './Pages/Projects'
import { Contact } from './Pages/Contact'
import { Error404 } from "./Pages/404";
import './styles/reset.css';

const router = createBrowserRouter([
  { path: "/", element: <Homepage />, errorElement: <Error404 /> },
  { path: "sobremim", element: <About /> },
  { path: "tecnologias", element: <Tech /> },
  { path: "projetos", element: <Projects /> },
  { path: "contato", element: <Contact /> }
])

const App = () => {
  return <RouterProvider router={router} />
}

export { App };
