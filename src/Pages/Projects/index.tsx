import { lazy, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProjectTemplate } from '../../Components/Templates/Project';
const ProjectOpenTemplate = lazy(() => import('../../Components/Templates/ProjectOpen'))



const Projects = () => {
  const navigate = useNavigate()


  const [id, setId] = useState<string | null>(null);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery()

  useEffect(() => {
    const value = query.get("id")
    if (typeof value !== 'undefined' && value !== null && isNaN(parseInt(value))) {
      navigate("/404")
      return;
    }

    setId(value)
  }, [query])

  return (
    <>
      {id === null ? <ProjectTemplate /> : <ProjectOpenTemplate id={id} />}
    </>
  )
}

export { Projects }
