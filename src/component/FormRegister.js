import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar 
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '',pass:'' };
  }
fetchData(){
  fetch('http://192.168.5.204:3000/api/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email:'fghjkl',
      password:'hjkl;'
    })
  });
  Actions.main();
}
	render(){
		return(
			<View style={styles.container}>
          <View style={{backgroundColor:"#ff584f",justifyContent:"center"}}>
            <StatusBar
                    backgroundColor="#c51d26"
                    barStyle="light-content"
                />
          </View>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              // onSubmitEditing={()=> this.password.focus()}
              onChangeText={(text) => this.setState({username:text})}
              value={this.state.username}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              onChangeText={(text) => this.setState({pass:text})}
              value={this.state.pass}
              />  
           <TouchableOpacity onPress={this.fetchData} style={styles.button}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#c51d26',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});