
import { BrowserRouter } from 'react-router-dom';
import { render,  screen, cleanup } from '../../shared/test-utils';

import Shoots from './Shoots';

afterEach(cleanup)

beforeEach(() => {
  render(
    <BrowserRouter>
      <Shoots shoots={ {'foo': {
        client: 'TEST CLIENT',
        type: 'TEST TYPE',
        description: 'TEST DESCRIPTION',
        startDate: 'TEST START DATE',
        endDate: 'TEST END DATE',
        cameras: ['TEST CAMERA 1', 'TEST CAMERA 2'],
        lenses: ['TEST LENSE 1', 'TEST LENSE 2'],
        rolls: ['TEST ROLL 1', 'TEST ROLL 2']
        } }
      } />
    </BrowserRouter>
  );
})
test('renders add new shoot link', () => {
  const text = screen.getByText('Add New Shoot');
  expect(text).toBeInTheDocument();
});

test('renders client text', () => {
  const text = screen.getByText('Client: TEST CLIENT');
  expect(text).toBeInTheDocument();
});

test('renders type text', () => {  
  const text = screen.getByText('Type: TEST TYPE');
  expect(text).toBeInTheDocument();
});

test('renders description text', () => {  
  const text = screen.getByText('Description: TEST DESCRIPTION');
  expect(text).toBeInTheDocument();
});

test('renders start date text', () => {  
  const text = screen.getByText('Start Date: TEST START DATE');
  expect(text).toBeInTheDocument();
});

test('renders start end text', () => {  
  const text = screen.getByText('End Date: TEST END DATE');
  expect(text).toBeInTheDocument();
});

test('renders cameras text', () => {  
  const text = screen.getByText('Cameras: TEST CAMERA 1, TEST CAMERA 2');
  expect(text).toBeInTheDocument();
});

test('renders lenses text', () => {  
  const text = screen.getByText('Lenses: TEST LENSE 1, TEST LENSE 2');
  expect(text).toBeInTheDocument();
});

test('renders rolls text', () => {  
  const text = screen.getByText('Film: TEST ROLL 1, TEST ROLL 2');
  expect(text).toBeInTheDocument();
});

