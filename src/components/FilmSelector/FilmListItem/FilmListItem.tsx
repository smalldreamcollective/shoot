interface FilmListItemProp {
  name: string;
}

const filmListItem = (props:FilmListItemProp) => {
  return (
    <option value={props.name}>{ props.name }</option>
  );
};

export default filmListItem;