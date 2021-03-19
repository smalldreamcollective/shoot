import { useDispatch, useSelector } from 'react-redux';
import { Formik, FormikHelpers, Form, Field } from 'formik';
import * as Yup from 'yup';

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
    .min(1)
    .required('Required'),
  type: Yup.string()
    .min(1)
    .required('Required'),
  description: Yup.string()
    .min(10)
    .required('Required'),
  startDate: Yup.string()
    .min(6)
    .required('Required'),
  endDate: Yup.string()
    .min(6)
    .required('Required'),
  cameras: Yup.string()
    .required('Required'),
  lenses: Yup.string()
    .required('Required'),
  rolls: Yup.string()
    .required('Required'),
});

const ShootForm = () => {

  const dispatch = useDispatch();

  const isUpdating = useSelector((state: RootState) => {
    return state.shoots.isUpdating
  });

  const onSubmitShootForm = (shoot: Shoot) => {
    dispatch(actions.addShoot(shoot));
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
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(
          values: ShootFormValues, 
          {setSubmitting, resetForm}: FormikHelpers<ShootFormValues>
        ) => {
          onSubmitShootForm(values);
          resetForm({});
        }}>
          {({ handleChange, errors, touched }) => (
          <Form>
            <p>
              <label htmlFor="client">Client</label>
              <Field id="client" name="client" placeholder="Client Name" />
              {(errors.client && touched.client) && (<span>{errors.client}</span>)}
            </p>
            <p>
              <label htmlFor="type">Type</label>
              <Field id="type" name="type" placeholder="Shoot Type" />
              {(errors.type && touched.type) && (<span>{errors.type}</span>)}
            </p>
            <p>
              <label htmlFor="description">Description</label>
              <Field as="textarea" id="description" name="description" placeholder="Enter a brief description." />
              {(errors.description && touched.description) && (<span>{errors.description}</span>)}
            </p>
            <p>
              <label htmlFor="startDate">Start Date</label>
              <Field type="date" id="startDate" name="startDate" placeholder="Enter a start date." />
              {(errors.startDate && touched.startDate) && (<span>{errors.startDate}</span>)}
            </p>
            <p>
              <label htmlFor="endDate">End Date</label>
              <Field type="date" id="endDate" name="endDate" placeholder="Enter an end date." />
              {(errors.endDate && touched.endDate) && (<span>{errors.endDate}</span>)}
            </p>
            <p>
              <label htmlFor="cameras">Cameras</label>
              <Field component="select" id="cameras" name="cameras"  multiple>
                <option key="cam1" value="pentax">Pentax</option>
                <option key="cam2" value="nikon">Nikon</option>
              </Field>
              {(errors.cameras && touched.cameras) && (<span>{errors.cameras}</span>)}
            </p>
            <p>
              <label htmlFor="lenses">Lenses</label>
              <Field component="select" id="lenses" name="lenses"  multiple>
                <option key="lens1" value="pentax80mm">Pentax 80mm</option>
                <option key="lens2" value="nikon50mm">Nikon 50mm</option>
              </Field>
              {(errors.lenses && touched.lenses) && (<span>{errors.lenses}</span>)}
            </p>
            <p>
              <label htmlFor="rolls">Film</label>
              <Field component="select" id="rolls" name="rolls"  multiple 
                onChange={(selectedOption: HTMLFormElement) => handleChange("rolls")(selectedOption.value)}>
                <option key="roll1" value="kodakTX400">Kodak TX400</option>
                <option key="roll2" value="cinestill800T">CineStill 800T</option>
              </Field>
              {(errors.rolls && touched.rolls) && (<span>{errors.rolls}</span>)}
            </p>
            <p>
              <button className="bg-blue-600 border p-1 focus:border-0 focus:bg-blue-600 focus:border-blue-600 focus:ring-offset-0 rounded-md text-white" type="submit" disabled={isUpdating}>Save</button>
            </p>
          </Form>
          )}
      </Formik>   
    </div>
  )
};

export default ShootForm;