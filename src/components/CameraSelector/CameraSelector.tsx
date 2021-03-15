import React from 'react';
import CameraListItem from './CameraListItem/CameraListItem';

interface CameraProps {
  cameras: any;
  cameraAdded: (param:string) => void;
}

const cameraSelector: React.FC<CameraProps> = (props: CameraProps) => {
  const {cameras, cameraAdded} = props; 
  
  let cameraArr = Object.keys(cameras).map(cameraKey => {
    return [...Array({
      [cameraKey]: cameras[cameraKey]
    })]
  })
  .reduce((prevArr, currArr) => {
    return prevArr.concat(currArr);
  }, []);

  let cameraList = cameraArr.map(camera => {
    const cameraName = Object.keys(camera)[0];
    return <CameraListItem key={cameraName} name={cameraName} />
  });

  return (
    <div>
      <p>CAMERA SELECTOR COMPONENT</p>
      <select multiple className="rounded" onChange={e => cameraAdded(e.currentTarget.value)}>
        {cameraList}
      </select>      
    </div>
  );
};

export default cameraSelector;