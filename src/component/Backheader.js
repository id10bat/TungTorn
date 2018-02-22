import React, { Component } from 'react';
import { View,Text,StyleSheet,StatusBar,TouchableOpacity } from "react-native";

import {Actions} from 'react-native-router-flux';

export default class BackHerder extends Component{
    back(){
        Actions.pop()
    }
    render(){
        return(
            <View style={{backgroundColor:"#FA8072",flexDirection:"row",height:50}}>
                <StatusBar
                    backgroundColor="#c35046"
                    barStyle="light-content"
                />
                <View style={{flex:1,justifyContent:"center",flexDirection:"row",}} >
                    <View style={{flex:1,flexDirection:"row",alignItems:"center"}} >
                        <TouchableOpacity onPress={this.back} style={{justifyContent:"center",alignItems:"center",}} >
                            <Text style={styles.textback} >{'<'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:2.5,justifyContent:"center"}} >
                        <Text style={styles.text} >รายการ</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  
    textback:{
        fontSize:40,
        textAlign:"left",
        color:"#000000",
        marginLeft:13
    },
    text:{
        fontSize:25,
        textAlign:"left",
        color:"#000000"
    }
});