interface CameraProps {
  name: string;
}

const cameraListItem = (props: CameraProps) => {
  return (
    <option value={props.name}>
      {props.name}
    </option>    
  );
};

export default cameraListItem;