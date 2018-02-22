import React,{ Component }from 'react';
import { View,
        Text,
        StyleSheet,
        TouchableOpacity
 } from 'react-native'

import {Actions} from 'react-native-router-flux';

export default class Best extends Component{
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
                            <Text style={styles.text} >สินค้าขายดี</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex:0,backgroundColor:"#ffffff",height:60,flexDirection:"row",borderBottomWidth:2}} >
                    <View style={styles.TextHead} >
                        <Text style={{fontSize:30,textAlign:"center"}} >สินค้า</Text>
                    </View>
                    <View style={styles.TextHead} >
                        <Text style={{fontSize:30,textAlign:"center"}} >จำนวน</Text>
                    </View>
                    <View style={styles.TextHead} >
                        <Text style={{fontSize:30,textAlign:"center"}} >ยอดขาย</Text>
                    </View>
                </View>
                {/* Data */}
                <View style={{flex:0,backgroundColor:"#c0c0c0",flexDirection:"row"}} >
                    <View style={styles.DataHead} >
                        <Text style={{fontSize:30,textAlign:"left"}} >1.มาม่า</Text>
                    </View>
                    <View style={styles.DataHead} >
                        <Text style={{fontSize:30,textAlign:"center",}} >120</Text>
                    </View>
                    <View style={styles.DataHead} >
                        <Text style={{fontSize:30,textAlign:"right",}} >720</Text>
                    </View>
                </View>
                <View style={{flex:0,backgroundColor:"#c0c0c0",flexDirection:"row"}} >
                    <View style={styles.DataHead} >
                        <Text style={{fontSize:30,textAlign:"left"}} >2.นม</Text>
                    </View>
                    <View style={styles.DataHead} >
                        <Text style={{fontSize:30,textAlign:"center",}} >100</Text>
                    </View>
                    <View style={styles.DataHead} >
                        <Text style={{fontSize:30,textAlign:"right",}} >2,000</Text>
                    </View>
                </View>
                <View style={{flex:0,backgroundColor:"#c0c0c0",flexDirection:"row"}} >
                    <View style={styles.DataHead} >
                        <Text style={{fontSize:30,textAlign:"left"}} >3.ปลากระป๋อง</Text>
                    </View>
                    <View style={styles.DataHead} >
                        <Text style={{fontSize:30,textAlign:"center",}} >80</Text>
                    </View>
                    <View style={styles.DataHead} >
                        <Text style={{fontSize:30,textAlign:"right",}} >2,400</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
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
TextHead:{
    flex:1,
    justifyContent:"center"
},
DataHead:{
    flex:1,
    height:60,
    backgroundColor:"#ffffff",
    justifyContent:"center",
    borderBottomWidth:1
}
})