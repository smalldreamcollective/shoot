import ISOListItem from './ISOListItem/ISOListItem';

interface ISOSelectorProps {
  isos: string[];
  isoSelected: (param: string) => void;
}

const isoSelector = (props: ISOSelectorProps) => {
  let isoList = null;

  if(props.isos) {
    isoList = props.isos.map((iso:string) => <ISOListItem key={iso} iso={iso} />);
  }
  
  const onSelectISO = (val:string) => props.isoSelected(val);
  return (
    <div>
      <p>ISO SELECTOR COMPONENT</p>
      <select className="rounded" onChange={e => onSelectISO(e.currentTarget.value)}>
        {isoList}
      </select>
    </div>
  );
};

export default isoSelector;