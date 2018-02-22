import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Backheader from '../component/Backheader';
export default class Modify extends Component{
    goBack(){
        Actions.pop()
    }
    render(){
        return(
            <View style={{flex:1,}} >
            {/* หัวข้อ */}
                <Backheader/>
                    <View style={{height:85,flex:0,flexDirection:"row",borderBottomWidth:1,borderColor:"#ff584f",backgroundColor:"#ffffff",}} >             
                        <View style={styles.Bar} >
                            <Text style={styles.Num} >3</Text>
                            <Text style={styles.Texthead} >  ชิ้น </Text>
                        </View>
                        <View style={styles.Bar} >
                            <Text style={styles.Num} >42</Text>
                            <Text style={styles.Texthead} >  บาท </Text>
                        </View>
                    </View>
                {/* <View style={{flex:0.3,backgroundColor:"#FA8072",
                            flexDirection:"row",justifyContent:"flex-end"}} >
                    <TouchableOpacity style={styles.Buttom} >
                        <Text style={{fontSize:20,textAlign:"center",backgroundColor:"#FA8072",flex:1,}} >ลบทั้งหมด</Text>
                    </TouchableOpacity>
                </View> */}
                {/* แถบหัวข้อสินค้า */}
                {/* <View style={{flex:0.5,backgroundColor:"#3AA2B6",flexDirection:"row"}}>
                    <View style={styles.Head} >
                        <Text style={styles.TextHead} >สินค้า</Text>
                    </View>
                    <View style={styles.Head} >
                        <Text style={styles.TextHead}>ราคา</Text>
                    </View>
                    <View style={styles.Head} >
                        <Text style={styles.TextHead}>จำนวน</Text>
                    </View>
                </View> */}
                {/* ที่แสดงสินค้า */}
                <View style={{flex:4,backgroundColor:"#c0c0c0",}}>
                    <ScrollView >
                        {/* ข้อมูล 1 ชุด ตรงนี้*/}
                            <View style={{flex:0,flexDirection:"row",
                                        justifyContent:"space-between",
                                        marginTop:1,
                                        backgroundColor:"#ffffff"}} >
                                <Text style={styles.Text}>ม่าม่า</Text>
                                <Text style={{flex:1,fontSize:32,
                                    textAlign:"right"
                                    }}>2</Text>
                                <Text style={{flex:0.5,fontSize:32,
                                    textAlign:"center"}}>ชิ้น</Text>
                                <TouchableOpacity style={styles.Buttom} >
                                    <Text style={{fontSize:22,
                                        width:30,
                                        textAlign:"center",
                                        color:"#ffffff",
                                        backgroundColor:"red",
                                        flex:0,
                                        borderRadius:30,}} >X</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:0,flexDirection:"row",
                                        justifyContent:"space-between",marginTop:1,backgroundColor:"#ffffff"}} >
                                <Text style={styles.Text}>wiwi</Text>
                                <Text style={{flex:1,fontSize:32,
                                    textAlign:"right"}}>1</Text>
                                <Text style={{flex:0.5,fontSize:32,
                                    textAlign:"center"}}>ชิ้น</Text>
                                <TouchableOpacity style={styles.Buttom} >
                                    <Text style={{fontSize:22,
                                        width:30,
                                        textAlign:"center",
                                        color:"#ffffff",
                                        backgroundColor:"red",
                                        flex:0,
                                        borderRadius:30,}} >X</Text>
                                </TouchableOpacity>
                            </View>
                        {/* ถึงตรงนี้ */}
                    </ScrollView>
                </View>
                {/* ปุ่มกลับและลบ */}
                <View style={{flex:0,backgroundColor:"#B69A43",flexDirection:"row",height:60}}>
                    <View style={{flex:1,backgroundColor:"#ffffff",
                                justifyContent:"flex-end"}} >
                        <TouchableOpacity onPress={this.goBack} style={{flex:1,justifyContent:"center",}} >
                            <Text style={styles.TextButtom} >ยกเลิกรายการทั้งหมด X</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={{flex:1,backgroundColor:"#ffffff",
                                justifyContent:"flex-end",alignItems:"center"}} >
                        <TouchableOpacity style={{backgroundColor:"#ffffff",
                                                height:60,width:150,
                                                marginBottom:10,
                                                justifyContent:"center",
                                                borderRadius:15,borderColor:"#FA8072",borderStyle:"solid",borderWidth:2}} >
                            
                                <Text style={{fontSize:28,textAlign:"center",
                                            color:"#FA8072"}} >ลบ</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    Head:{
        flex:1,
        backgroundColor:"#ffffff",
        alignItems:"center"
        
    },
    TextHead:{
        fontSize:22,
        color:"#000000",
        marginTop:10,
        marginRight:35

    },
    Buttom:{
        flex:0,
        backgroundColor:"#ffffff",
        justifyContent:"center",
        marginRight:5,
        width:50
    },
    Text:{
        fontSize:32,textAlign:"auto",marginLeft:20
    },
    TextButtom:{
        fontSize:20,
        textAlign:"right",
        color:"#ff584f",
        marginRight:20
    },
    Texthead:{
        fontSize:18,
        textAlign:"center",
        marginTop:15,
    },
    Bar:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    Num:{
        fontSize:40,
        textAlign:"center",
        marginBottom:10,
        fontWeight:"bold",
        justifyContent:"center"
    },
});