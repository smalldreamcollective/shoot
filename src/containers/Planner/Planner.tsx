import React, { useCallback, useEffect } from 'react';

import Shoots from '../../components/Shoots/Shoots';
import CameraSelector from '../../components/CameraSelector/CameraSelector';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../store/actions/';
import { RootState } from '../../store/reducers';

const Planner = () => {

  const dispatch = useDispatch();

  const camera = useSelector((state: RootState)  => {
    return state.planner.camera;
  });

  const film = useSelector((state: RootState) => {
    return state.planner.film;
  });

  const iso = useSelector((state: RootState) => {
    return state.planner.iso;
  });
  
  const cameras = useSelector((state: RootState) => {
    return state.cameras.cameras;
  });

  const shoots = useSelector((state: RootState) => {
    return state.shoots.shoots;
  })
  
  const onCameraAdded = (cameraName: string) => dispatch(actions.addCamera(cameras[cameraName]));
  
  const onGetFilmList = useCallback(() => dispatch(actions.getFilmList()), [dispatch]);
  const onFilmListUpdated = useCallback(() => dispatch(actions.filmListUpdated()), [dispatch]);
  const onGetCameras = useCallback(() => dispatch(actions.getCameras()), [dispatch]);
  const onCamerasUpdated = useCallback(() => dispatch(actions.camerasUpdated()), [dispatch]);
  const onGetShoots = useCallback(() => dispatch(actions.getShoots()), [dispatch]);
  const onShootsUpdated = useCallback(() => dispatch(actions.shootsUpdated()), [dispatch]);

  useEffect(() => {
    onGetFilmList();
    onFilmListUpdated();
    onGetCameras();
    onCamerasUpdated();
    onGetShoots();
    onShootsUpdated();
  }, [onGetFilmList, onFilmListUpdated, onGetCameras, onCamerasUpdated, onGetShoots, onShootsUpdated]);

  let shootsComponent = null;

  if(shoots) {
    shootsComponent = <Shoots shoots={shoots} />
  }
  
  
  return (
    <div className="mx-auto px-4 rounded bg-yellow-50">
      <h1>Planner Container</h1>
      {shootsComponent}
    </div>
  
  );
};

export default Planner;