import React,{ Component }from 'react';
import { View,
        Text,
        StyleSheet,
        TouchableOpacity
 } from 'react-native'

import {Actions} from 'react-native-router-flux';
 export default class Sell extends Component{
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
                            <Text style={styles.text} >รายการขาย</Text>
                        </View>
                    </View>
                </View>
                {/* data */}
                <View style={{flex:0.8,backgroundColor:"#ffffff",
                                borderColor:"#ff584f",
                                borderTopWidth:1,
                                borderBottomWidth:1,
                                justifyContent:"center"}} >
                        <View style={{flex:1}} >
                            <Text style={styles.Text} > D / M / Y</Text>
                        </View>
                    <View style={{flex:1,flexDirection:"row"}} >
                        <View style={{backgroundColor:"#ffffff",justifyContent:"center"}} >
                            <Text style={styles.Text} >ยอดขาย</Text>
                        </View>
                        <View style={styles.Num} >
                            <Text style={styles.Text} >820 บาท</Text>
                        </View>
                    </View>
                </View>
                {/* ข้อมูลการขาย */}
                <View style={{flex:3.8,backgroundColor:"#ffffff",flexDirection:"column",}} >
                    <View style={{flex:0,height:60,flexDirection:"row",
                                    borderBottomWidth:1,borderColor:"#ff584f"}} >
                        <View style={styles.Time} >
                            <Text style={styles.Text} >12:35</Text>
                        </View>
                        <View style={styles.Num} >
                            <Text style={styles.Text} >300 บาท</Text>
                        </View>
                    </View>
                    <View style={{flex:0,height:60,flexDirection:"row",
                                    borderBottomWidth:1,borderColor:"#ff584f"}} >
                        <View style={styles.Time} >
                            <Text style={styles.Text} >12:59</Text>
                        </View>
                        <View style={styles.Num} >
                            <Text style={styles.Text} >500 บาท</Text>
                        </View>
                    </View>
                    <View style={{flex:0,height:60,flexDirection:"row",
                                    borderBottomWidth:1,borderColor:"#ff584f"}} >
                        <View style={styles.Time} >
                            <Text style={styles.Text} >13:00</Text>
                        </View>
                        <View style={styles.Num} >
                            <Text style={styles.Text} >20 บาท</Text>
                        </View>
                    </View>
                </View>
                {/* ยอดขาย */}
            </View>
         );
     }
 }
 const styles=StyleSheet.create({
    Body:{
        flex:0.3,
        backgroundColor:"#ffffff",
        justifyContent:"center"
    },
    Time:{
        alignItems:"flex-start",
        flex:1,
    },
    Num:{
        alignItems:"flex-end",
        flex:1,
    },
    Text:{
        fontSize:25,
        backgroundColor:"#ffffff",
        margin:10
    },
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
 })