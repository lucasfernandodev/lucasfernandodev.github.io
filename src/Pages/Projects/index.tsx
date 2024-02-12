import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ProjectTemplate } from '../../Components/Templates/Project';
import { ProjectOpenTemplate } from '../../Components/Templates/ProjectOpen';


const Projects = () => {

  const [id, setId] = useState<string | null>(null);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery()

  useEffect(() => {
    const value = query.get("id")
    setId(value)
  }, [query])

  return (
    <>{id === null ? <ProjectTemplate /> : <ProjectOpenTemplate id={id} />}</>
  )
}

export { Projects }
