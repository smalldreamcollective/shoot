import { Film } from '../../models/film.model';

import FilmListItem from './FilmListItem/FilmListItem';

interface FilmSelectorProps {
  formats: string[];
  film:FilmList;  
  filmAdded: (param:string) => void;
}

interface FilmList {
  [key: string]: Film;
}

const filmSelector = (props: FilmSelectorProps) => {

  let formatFilter = (film: FilmList, index: number, arr:any[]): boolean => {
    let format = film[Object.keys(arr[index])[0]].format
    return props.formats.includes(format);
  };

  let transformedFilmList = Object.keys(props.film).map((filmKey: string) => {    
    let listItem = {[filmKey]: props.film[filmKey]};
    return [...Array(
      listItem
    )]
  })
  .reduce((prevArr, currArr) => {
    return prevArr.concat(currArr);
  }, []);
  
  let useableFilm = transformedFilmList.filter(formatFilter)
  
  let film = useableFilm.map((film: any) => {
    const filmName = Object.keys(film)[0];
    return (
      <FilmListItem key={filmName} name={filmName} />
    );
  });
    
  const onSelectFilm = (val: string) => props.filmAdded(val);

  return (
    <div>
      <p>FILM SELECTOR COMPONENT</p>
      <select className="rounded" onChange={e => onSelectFilm(e.currentTarget.value)}>
        {film}
      </select>
    </div>
  );
};

export default filmSelector;