import { Route, Switch, withRouter } from 'react-router-dom';
import Planner from './containers/Planner/Planner';
import AddShoot from './components/Shoots/ShootForm/ShootForm';
import EquipmentManager from './containers/EquipmentManager/EquipmentManager';
import SupplyManager from './containers/SupplyManager/SupplyManager';


let routes = (
  <Switch>
    <Route path="/" exact component={Planner} />
    <Route path="/shoot/add" exact component={AddShoot} />
    <Route path="/equipment" render={(props) => <EquipmentManager {...props} />} />
    <Route path="/supplies" render={(props) => <SupplyManager {...props} />}/>
  </Switch>
)
const app = () => {
  return (
    <div>
      {routes}
    </div>
  );
}

export default withRouter(app);