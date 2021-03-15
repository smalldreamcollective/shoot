import React, { useCallback, useEffect } from 'react';

import CameraSelector from '../../components/CameraSelector/CameraSelector';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../store/actions/';
import { RootState } from '../../store/reducers';


interface EquipmentManagerProps {}

const EquipmentManager = (props: EquipmentManagerProps) => {

  const dispatch = useDispatch();

  const cameras = useSelector((state: RootState) => {
    return state.cameras.cameras;
  });

  const onGetCameras = useCallback(() => dispatch(actions.getCameras()), [dispatch]);
  const onCamerasUpdated = useCallback(() => dispatch(actions.camerasUpdated()), [dispatch]);
  const onCameraAdded = (cameraName: string) => dispatch(actions.addCamera(cameras[cameraName]));

  useEffect(() => {
    onGetCameras();
    onCamerasUpdated();    
  }, 
  [onGetCameras, onCamerasUpdated]);

  let cameraSelector = null;
  
  if(cameras) {
    cameraSelector = <CameraSelector cameraAdded={onCameraAdded} cameras={cameras} />
  }
  
  return (
    <div>
      <p>EQUIPMENT MANAGER</p>
      {cameraSelector}
    </div>
  )
};

export default EquipmentManager;