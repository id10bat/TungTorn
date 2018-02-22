import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Main from './pages/Main';
import Modify from './pages/Modify';
import Pay from './pages/Pay';
import Sell from './pages/Sell_Items';
import Manu from './pages/Manu';
import Add from './pages/Addproduct';
import Low from './pages/Low_inventory';
import Best from './pages/ฺฺBest_seller';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default class Routes extends Component {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
					<Scene key="Login" component={Login} title="Login" initial={true} />
					<Scene key="Signup" component={Signup} title="Signup" />
			      	<Scene key="main" component={Main} title="Main" />
					<Scene key="Pay" component={Pay} title="Pay" />
					<Scene key="Modify" component={Modify} title="Modify" />
					<Scene key="Sell" component={Sell} title="Sell" />
					<Scene key="Manu" component={Manu} title="Manu" />
					<Scene key="Add" component={Add} title="Addproduct" />
					<Scene key="Low" component={Low} title="Low inventory" />
					<Scene key="Best" component={Best} title="Best Seller" />
			    </Stack>
			 </Router>
			)
	}
}