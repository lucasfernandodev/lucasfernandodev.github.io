import { useRouteError } from 'react-router-dom';
import style from './style.module.css';
import { Layout } from '../../Components/Layout';


const Error404 = () => {
  const error = useRouteError() as any

  return (
    <Layout>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Layout>
  )
}

export { Error404 }
