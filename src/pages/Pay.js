import React,{ Component }from 'react';
import { View,
        Text,
        StyleSheet,
        TouchableOpacity,
        TextInput,KeyboardType
 } from 'react-native'
import Backheader from '../component/Backheader';
 export default class Pay extends Component{
    
     render(){
         return(
             <View style={{flex:1,backgroundColor:"#c0c0c0"}} >
                {/* แถบบน */}
                <Backheader/>
                <View style={{flex:1,backgroundColor:"#ffffff",}} >
                    <View style={{flexDirection:"row"}} >
                        <View style={styles.Head} >
                            <Text style={styles.TextHead} >ยอดชำระ</Text>
                        </View>
                        <View style={styles.Head} >
                            <Text style={styles.TextHead} >12 บ.</Text>
                        </View>
                    </View>
                    <View style={styles.Pay} >
                        <Text style={styles.Text} >รับเงิน</Text>
                        <TextInput style={styles.TextInput} keyboardType={'numeric'} ></TextInput>
                    </View>
                    <View style={{flexDirection:"row"}} >
                        <View style={styles.Head} >
                            <Text style={styles.Text} >เงินทอน</Text>
                        </View>
                        <View style={styles.Head} >
                            <Text style={styles.Text} >ทอน บ.</Text>
                        </View>
                    </View>
                    <View style={styles.ViewBT} >
                        <TouchableOpacity style={styles.Botton} >
                            <Text style={styles.Text} >ยืนยัน</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
             </View>
         );
    }
}
const styles = StyleSheet.create({
    TextHead:{
        fontSize:40,
        textAlign:"center",
        color:"#000000"
    },
    Head:{
        flex:1,height:70,
        backgroundColor:"#ffffff",
        justifyContent:"center",
    },
    Text:{
        fontSize:30,
        textAlign:"center",
        color:"#000000"
    },
    Pay:{
        height:120,
        backgroundColor:"#ffffff",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        borderTopWidth:1
        ,borderBottomWidth:1
        ,borderColor:"#fa8072",
    },
    TextInput:{
        fontSize:30,
        width:200,
        textAlign:"center",
        color:"#000000",
        marginLeft:20
    },
    ViewBT:{
        flex:1,
        justifyContent:"flex-end",
        backgroundColor:"#ffffff",
        alignItems:"center"
    },
    Botton:{
        width:250,
        justifyContent:"center",
        backgroundColor:"#FA8072",
        borderRadius:5,
        marginBottom:20
    }
});