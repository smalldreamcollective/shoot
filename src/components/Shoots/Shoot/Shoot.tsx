import { Shoot } from "../../../models/shoot.model";

interface ShootProps {
  shoot: Shoot;
}

const shoot = (props: ShootProps) => {

  const cameras = props.shoot.cameras;
  const lenses = props.shoot.lenses;
  const rolls = props.shoot.rolls;

  let cameraList = 'none';
      
  if(cameras.length) {
    cameraList = cameras.join(', ');
  }

  let lensList =  'none';
  
  if(lenses.length) {
    lensList = lenses.join(', ');
  }

  let rollList = 'none';

  if(rolls.length) {
    rollList = rolls.join(', ');
  }

  return (
      <div className="container bg-gray-50 inline-block rounded border p-5 border-gray-100">  
        <p>Client: {props.shoot.client}</p>
        <p>Type: {props.shoot.type}</p>
        <p>Description: {props.shoot.description}</p>
        <p>Start Date: {props.shoot.startDate}</p>
        <p>End Date: {props.shoot.endDate}</p>
        <p>Cameras: {cameraList}</p>
        <p>Lenses: {lensList}</p>
        <p>Rolls: {rollList}</p>
      </div>      
  );
};

export default shoot;