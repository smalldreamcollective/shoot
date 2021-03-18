import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shoot as ShootType} from '../../models/shoot.model';
import Shoot from './Shoot/Shoot'

interface ShootsProps {
  shoots: ShootList
}

interface ShootList {
  [key: string]: ShootType;
}

const shoots: React.FC<ShootsProps> = (props: ShootsProps) => {

  let transformedShootList = Object.keys(props.shoots).map((shootKey: string) => {    
    let listItem = {[shootKey]: props.shoots[shootKey]};
    return [...Array(
      listItem[Object.keys(listItem)[0]]
    )]
  })
  .reduce((prevArr, currArr) => {
    return prevArr.concat(currArr);
  }, []);

  console.log(transformedShootList)
  let shoots = transformedShootList.map((shoot: any) => <Shoot key={shoot.client} shoot={shoot} />);

  return (
    <div className="container bg-gray-50 inline-block rounded border p-5 border-gray-100">  
      <p>Shoots</p>
      <NavLink 
        to="/shoot/add"
        className="bg-blue-600 border p-1 focus:border-0 focus:bg-blue-600 focus:border-blue-600 focus:ring-offset-0 rounded-md text-white">
          Add New Shoot
      </NavLink>
      {shoots}
    </div>      
  );
};

export default shoots;