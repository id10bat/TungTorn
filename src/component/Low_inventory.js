import React,{ Component }from 'react';
import { View,
        Text,
        StyleSheet,
        TouchableOpacity
 } from 'react-native'

import {Actions} from 'react-native-router-flux';

export default class Low extends Component{
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
                            <Text style={styles.text} >สินค้าเหลือน้อย</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex:0,backgroundColor:"#ffffff",height:60,flexDirection:"row",borderBottomWidth:2}} >
                    <View style={{flex:1,justifyContent:"center"}} >
                        <Text style={styles.TextHead} >สินค้า</Text>
                    </View>
                    <View style={{flex:1,justifyContent:"center"}} >
                        <Text style={styles.TextHead} >จำนวน</Text>
                    </View>
                </View>
                {/* Data */}
                <View style={styles.DataHead} >
                    <View style={styles.ProductHead} >
                        <Text style={styles.TextHead} >ปลากระป๋อง</Text>
                    </View>
                    <View style={styles.ProductHead} >
                        <Text style={styles.TextNum} >3</Text>
                    </View>
                </View>
                <View style={styles.DataHead} >
                    <View style={styles.ProductHead} >
                        <Text style={styles.TextHead} >มาม่า</Text>
                    </View>
                    <View style={styles.ProductHead} >
                        <Text style={styles.TextNum} >2</Text>
                    </View>
                </View>
                <View style={styles.DataHead} >
                    <View style={styles.ProductHead} >
                        <Text style={styles.TextHead} >น้ำดื่ม</Text>
                    </View>
                    <View style={styles.ProductHead} >
                        <Text style={styles.TextNum} >2</Text>
                    </View>
                </View>
                <View style={styles.DataHead} >
                    <View style={styles.ProductHead} >
                        <Text style={styles.TextHead} >เหล้าขาว</Text>
                    </View>
                    <View style={styles.ProductHead} >
                        <Text style={styles.TextNum} >0</Text>
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
DataHead:{
    flex:0,
    backgroundColor:"#c0c0c0",
    flexDirection:"row"
},
ProductHead:{
    flex:1,
    height:60,
    backgroundColor:"#ffffff",
    justifyContent:"center",
    borderBottomWidth:1
},
TextHead:{
    fontSize:30,
    textAlign:"center"
},
TextNum:{
    fontSize:30,
    textAlign:"center",
    color:"red"
}
})