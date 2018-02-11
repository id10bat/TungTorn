import React, { Component } from 'react';
import { View,Text,StyleSheet,TouchableOpacity,TextInput } from "react-native";

import {Actions, Tabs} from 'react-native-router-flux';
export default class Add extends Component{
    back(){
        Actions.pop()
    }
    render(){
        return(
            <View style={{flex:1}} >
                <View style={{backgroundColor:"#FA8072",flexDirection:"row",height:50}}>
                    <View style={{flex:1,justifyContent:"center",flexDirection:"row",}} >
                        <View style={{flex:1,flexDirection:"row",alignItems:"center"}} >
                            <TouchableOpacity onPress={this.back} style={{justifyContent:"center",alignItems:"center",}} >
                                <Text style={styles.textback} >{'<'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:2.5,justifyContent:"center"}} >
                            <Text style={styles.text} >เพิ่มสินค้า</Text>
                        </View>
                    </View>
                </View>
                {/* scan */}
                <View style={{flex:1.2,backgroundColor:"#c0c0c0",borderTopWidth:1,borderBottomWidth:1}} >
                    <Text>scanner</Text>
                </View>
                {/* data */}
                <View style={styles.DataView} >
                    {/* product */}
                    <View style={styles.DataView} >
                        <Text style={styles.TextData} >สินค้า</Text>
                    </View>
                    {/* raca */}
                    <View style={styles.DataHead} >
                        <View style={styles.DataView} >
                            <Text style={styles.TextData} >ราคา</Text>
                        </View>
                        <View style={styles.DataView} >
                            <View style={{flexDirection:"row",marginTop:12,justifyContent:"center",}} >
                                <TouchableOpacity >
                                    <Text style={{width:30,
                                        fontSize:36.5,textAlign:"center",
                                        color:"#000000"}} 
                                        >-</Text>
                                </TouchableOpacity>
                                <View style={{width:55,justifyContent:"center"}} >
                                    <View style={{flex:1,width:50,
                                        marginBottom:5,
                                        marginTop:5,
                                        borderWidth:1,
                                        backgroundColor:"#ffffff"}} >
                                        <Text style={{flex:1,
                                        fontSize:20,
                                        textAlign:"center",
                                        marginBottom:5,
                                        marginTop:5,}} >1</Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Text style={{width:30,
                                        fontSize:36.5,textAlign:"center",
                                        color:"#000000"}} 
                                        >+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* num */}
                    <View style={styles.DataHead} >
                        <View style={styles.DataView} >
                            <Text style={styles.TextData} >จำนวน</Text>
                        </View>
                        <View style={styles.DataView} >
                            <View style={{flexDirection:"row",marginTop:12,justifyContent:"center",}} >
                                <TouchableOpacity >
                                    <Text style={{width:30,
                                        fontSize:36.5,textAlign:"center",
                                        color:"#000000"}} 
                                        >-</Text>
                                </TouchableOpacity>
                                <View style={{width:55,justifyContent:"center"}} >
                                    <View style={{flex:1,width:50,
                                        marginBottom:5,
                                        marginTop:5,
                                        borderWidth:1,
                                        backgroundColor:"#ffffff"}} >
                                        <Text style={{flex:1,
                                        fontSize:20,
                                        textAlign:"center",
                                        marginBottom:5,
                                        marginTop:5,}} >1</Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Text style={{width:30,
                                        fontSize:36.5,textAlign:"center",
                                        color:"#000000"}} 
                                        >+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* button */}
                    <View style={styles.DataHead} >
                        <View style={styles.DataView} >
                            <Text style={styles.TextData} >ยกเลิก</Text>
                        </View>
                        <View style={styles.DataView} >
                            <TouchableOpacity style={{width:200,height:50,backgroundColor:"#ff584f",justifyContent:"center",borderRadius:20}} >
                                <Text style={{fontSize:32,textAlign:"center",color:"#000000"}} >เพิ่มสินค้า</Text>
                            </TouchableOpacity>
                        </View>
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
    },
    DataHead:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
    },
    DataView:{
        flex:1,
        backgroundColor:"#ffffff",
        justifyContent:"center"
    },
    TextData:{
        fontSize:32,
        marginLeft:50,
        color:"#000000"
    }
});