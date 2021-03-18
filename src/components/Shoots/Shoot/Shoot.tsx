import { Shoot } from "../../../models/shoot.model";

interface ShootProps {
  shoot: Shoot;
}

const shoot = (props: ShootProps) => {
   
  const { 
    cameras, 
    lenses, 
    rolls,
    client,
    type,
    description,
    startDate,
    endDate
   } = props.shoot;
  
  let cameraList = 'none';
      
  if(Array.isArray(cameras)) {
    cameraList = cameras.join(', ');
  }

  let lensList =  'none';
  
  if(Array.isArray(lenses)) {
    lensList = lenses.join(', ');
  }

  let rollList = 'none';

  if(Array.isArray(rolls)) {
    rollList = rolls.join(', ');
  }

  return (
      <div className="container bg-gray-50 inline-block rounded border p-5 border-gray-100">  
        <p>Client: {client}</p>
        <p>Type: {type}</p>
        <p>Description: {description}</p>
        <p>Start Date: {startDate}</p>
        <p>End Date: {endDate}</p>
        <p>Cameras: {cameraList}</p>
        <p>Lenses: {lensList}</p>
        <p>Rolls: {rollList}</p>
      </div>      
  );
};

export default shoot;