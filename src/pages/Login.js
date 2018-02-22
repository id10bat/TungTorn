import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../component/Logo';
import Form from '../component/FormLogin';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component {
signup(){
  Actions.Signup()
}

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="login" />
				<View style={styles.signupTextCont}>
				</View>
        <TouchableOpacity onPress={this.signup} >
          <Text style={styles.signupText} >sigsup</Text>
        </TouchableOpacity>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#ff584f',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});
