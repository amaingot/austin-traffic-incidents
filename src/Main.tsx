import * as React from 'react';
import { useIncidentList } from './hooks/queries';

const Main: React.FunctionComponent<{}> = () => {
  const { data } = useIncidentList();

  return (
    <div>
      Connected!
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default Main;
