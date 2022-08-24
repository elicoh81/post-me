import React from 'react';
import { useQuery } from '../../common-hooks/UseQuery';


export default function MapPage() {
  let query = useQuery();

  return (
    <div>Something need to be here according to query</div>
  );

}