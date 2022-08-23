import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}


export default function MapPage() {
  let query = useQuery();

  return (
    <div>Something need to be here according to query</div>
  );

}