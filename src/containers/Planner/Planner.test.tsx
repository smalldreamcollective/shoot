import { render,  screen, cleanup } from '../../shared/test-utils';
import Planner from './Planner';


afterEach(cleanup)

test('renders header text', () => {
  render(
    <Planner />
  );
  const headerElement = screen.getByText('Planner Container');
  expect(headerElement).toBeInTheDocument();
});