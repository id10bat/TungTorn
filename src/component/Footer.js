import React, { Component } from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';


export default class Footer extends Component{
    manu(){
        Actions.Manu()
    }
    Main(){
        Actions.pop()
    }
    render(){
        return(
            <View style={styles.Option}>
                    <TouchableOpacity onPress={this.Main} style={styles.Botton} >
                        <Text style={styles.Icon} >
                            ขาย
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.manu} style={styles.Botton} >
                        <Text style={styles.Icon}>
                            เมนู
                        </Text>
                    </TouchableOpacity>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    
    Option:{
        flex:0.4,
        backgroundColor:'#FA8072',
        flexDirection:"row",
        borderTopWidth:1,
        borderColor:"#ff584f",
        
        
        
        
    }, 
    Botton:{
        flex:1,
        backgroundColor:"#ffffff",
        
  
    },
    Icon:{
        textAlign:"center",
        marginTop:10,

    },
});