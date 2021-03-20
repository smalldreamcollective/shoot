import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Shoot } from '../../../models/shoot.model';
import * as actions from '../../../store/actions/';
import { RootState } from '../../../store/reducers';

interface ShootFormValues {
  client: string;
  type: string;
  description: string;
  startDate: string;
  endDate: string;
  cameras: string[];
  lenses: string[];
  rolls: string[];
}

const validationSchema = Yup.object().shape({
  client: Yup.string()
    .required('Required')
    .min(1),
  type: Yup.string()
    .required('Required')
    .min(1),
  description: Yup.string()
    .required('Required')
    .min(10),
  startDate: Yup.string()
    .required('Required')
    .min(6),
  endDate: Yup.string()
    .required('Required')
    .min(6),
  cameras: Yup.array()
    .min(1),
  lenses: Yup.array()
    .min(1),
  rolls: Yup.array()
    .min(1)
});

const ShootForm = () => {

  const { errors, handleSubmit, register, reset, setValue } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const dispatch = useDispatch();

  const isUpdating = useSelector((state: RootState) => {
    return state.shoots.isUpdating
  });

  const onSubmitShootForm = (shoot: Shoot) => {
    dispatch(actions.addShoot(shoot));
    reset(initialValues);
  };   

  const initialValues: ShootFormValues = {
    client: '',
    type: '',
    description: '',
    startDate: '',
    endDate: '',
    cameras: [],
    lenses: [],
    rolls: []
  };
  
  return (
    <div className="ShootForm">
      {isUpdating.toString()}
      
          <form onSubmit={handleSubmit(onSubmitShootForm)}>
            <p>
              <label htmlFor="client">Client</label>
              <input type="text" id="client" name="client" placeholder="Client Name" ref={register} />
              {errors.client && <span>{errors.client?.message}</span>}
            </p>
            <p>
              <label htmlFor="type">Type</label>
              <input type="text" id="type" name="type" placeholder="Shoot Type" ref={register} />
              {errors.type && <span>{errors.type?.message}</span>}
            </p>
            <p>
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" placeholder="Enter a brief description." ref={register} />
              {errors.description && <span>{errors.description?.message}</span>}
            </p>
            <p>
              <label htmlFor="startDate">Start Date</label>
              <input type="date" id="startDate" name="startDate" placeholder="Enter a start date." ref={register} />
              {errors.startDate && <span>{errors.startDate?.message}</span>}
            </p>
            <p>
              <label htmlFor="endDate">End Date</label>
              <input type="date" id="endDate" name="endDate" placeholder="Enter an end date." ref={register} />
              {errors.endDate && <span>{errors.endDate?.message}</span>}
            </p>
            <p>
              <label htmlFor="cameras">Cameras</label>
              <select id="cameras" name="cameras"  multiple ref={register}>
                <option key="cam1" value="pentax">Pentax</option>
                <option key="cam2" value="nikon">Nikon</option>
              </select>
              {errors.cameras && <span>{errors.cameras?.message}</span>}
            </p>
            <p>
              <label htmlFor="lenses">Lenses</label>
              <select id="lenses" name="lenses"  multiple ref={register}>
                <option key="lens1" value="pentax80mm">Pentax 80mm</option>
                <option key="lens2" value="nikon50mm">Nikon 50mm</option>
              </select>
              {errors.lenses && <span>{errors.lenses?.message}</span>}
            </p>
            <p>
              <label htmlFor="rolls">Film</label>
              <select id="rolls" name="rolls"  multiple ref={register}>
                <option key="roll1" value="kodakTX400">Kodak TX400</option>
                <option key="roll2" value="cinestill800T">CineStill 800T</option>
              </select>
              {errors.rolls && <span>{errors.rolls?.message}</span>}
            </p>
            <p>
              <button className="bg-blue-600 border p-1 focus:border-0 focus:bg-blue-600 focus:border-blue-600 focus:ring-offset-0 rounded-md text-white" type="submit" disabled={isUpdating}>Save</button>
            </p>
          </form>
    </div>
  )
};

export default ShootForm;