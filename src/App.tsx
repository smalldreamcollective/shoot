import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import EquipmentManager from './containers/EquipmentManager/EquipmentManager';
import Planner from './containers/Planner/Planner';
import SupplyManager from './containers/SupplyManager/SupplyManager';

let routes = (
  <Switch>
    <Route path="/" exact component={Planner} />
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