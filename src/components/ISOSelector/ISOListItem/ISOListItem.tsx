interface ISOListItemProps {
  iso: string;
}

const isoListItem = (props:ISOListItemProps) => {
  return (
    <option value={props.iso}>{props.iso}</option>
  );
};

export default isoListItem;