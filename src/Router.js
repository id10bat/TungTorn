import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Main from './component/Main';
import Modify from './component/Modify';
import Pay from './component/Pay';
import Sell from './component/Sell_Items';
import Manu from './component/Manu';
import Add from './component/Addproduct';
import Low from './component/Low_inventory';
import Best from './component/Best_seller';

export default class Routes extends Component {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="Main" component={Main} title="Login" initial={true}/>
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