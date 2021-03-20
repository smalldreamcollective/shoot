import { render, screen } from './shared/test-utils';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const headerElement = screen.getByText('Planner Container');
  expect(headerElement).toBeInTheDocument();  
});
