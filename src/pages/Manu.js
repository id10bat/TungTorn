import React, { Component } from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import {Actions} from 'react-native-router-flux';

import Header from '../component/Header';
import Footer from '../component/Footer';
export default class Manu extends Component{
    Add(){
        Actions.Add()
    }
    Sell(){
        Actions.Sell()
    }
    Low(){
        Actions.Low()
    }
    Best(){
        Actions.Best()
    }
    render(){
        return(
           <View style={{flex:1,}}>
                <Header/>
                <View style={{flex:4,backgroundColor:"#eeeeee"}} >
                    <View style={styles.manu} >
                        <TouchableOpacity onPress={this.Add} style={styles.manuBar} >
                            <Text style={styles.textBar} >เพิ่มสินค้า</Text>
                            <Text style={styles.iconBar} >></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.manu} >
                        <TouchableOpacity style={styles.manuBar} >
                            <Text style={styles.textBar} >สร้างป้ายแสกน</Text>
                            <Text style={styles.iconBar} >></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.manu} >
                        <TouchableOpacity onPress={this.Low} style={styles.manuBar} >
                            <Text style={styles.textBar} >สินค้าเหลือน้อย</Text>
                            <Text style={styles.iconBar} >></Text>

                        </TouchableOpacity>
                    </View>
                    <View style={styles.manu} >
                        <TouchableOpacity onPress={this.Best} style={styles.manuBar} >
                            <Text style={styles.textBar} >สินค้าขายดี</Text>
                            <Text style={styles.iconBar} >></Text>

                        </TouchableOpacity>
                    </View>
                    <View style={styles.manu} >
                        <TouchableOpacity onPress={this.Sell} style={styles.manuBar} >
                            <Text style={styles.textBar} >ยอดขายประจำวัน</Text>
                            <Text style={styles.iconBar} >></Text>

                        </TouchableOpacity>
                    </View>
                </View>
                <Footer/>
           </View>
        )
    }
}

const styles = StyleSheet.create({
  
    manu:{
        flex:0,height:80
    },
    manuBar:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"#ffffff",
        borderBottomWidth:2,
        borderBottomColor:"#EEEEEE",
        justifyContent:"space-between",
        alignItems:"center"
    },
    textBar:{
        fontSize:30,
        marginLeft:20,
        color:"#000000"
    },
    iconBar:{
        fontSize:30,
        marginRight:20
    }
});