import React from 'react';
import { Formik, FormikHelpers, Form, Field } from 'formik';
import { Shoot } from '../../../models/shoot.model';
import { useDispatch, useSelector } from 'react-redux';
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
        onSubmit={(
          values: ShootFormValues, 
          {setSubmitting, resetForm}: FormikHelpers<ShootFormValues>
        ) => {
          onSubmitShootForm({
            ...values, 
            cameras: [],
            lenses: [],
            rolls:[]
          });
          resetForm({});
        }}>
          <Form>
            <p>
              <label htmlFor="client">Client</label>
              <Field id="client" name="client" placeholder="Client Name" />
            </p>
            <p>
              <label htmlFor="type">Type</label>
              <Field id="type" name="type" placeholder="Shoot Type" />
            </p>
            <p>
              <label htmlFor="description">Description</label>
              <Field as="textarea" id="description" name="description" placeholder="Enter a brief description." />
            </p>
            <p>
              <label htmlFor="startDate">Start Date</label>
              <Field id="startDate" name="startDate" placeholder="Enter a start date." />
            </p>
            <p>
              <label htmlFor="endDate">End Date</label>
              <Field id="endDate" name="endDate" placeholder="Enter an end date." />
            </p>
            <p>
              <button type="submit" disabled={isUpdating}>Save</button>
            </p>
          </Form>
      </Formik>   
    </div>
  )
};

export default ShootForm;