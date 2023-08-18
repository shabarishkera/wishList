import {Pressable, View, StyleSheet, Text, ToastAndroid} from 'react-native'
export default function Individual({item}) {
return <View style={style.totalwrapper}>
<View style={style.container}>
        <Text style={style.title}>{item.title}</Text>
        </View>
       </View>
}

const style = StyleSheet.create({
    container: {
        backgroundColor:'orange',
        flexDirection: 'row',
        elevation: 5,
        borderRadius: 6,
        minHeight: 100,
    
    },
    totalwrapper:{
        flex:1,
        padding:15,
        marginBottom:19

    },
  
    title: {
        
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
        color: 'white'
    },
   
    date: {

        color:'red'
    },

    amount: {
        color:'red',
        fontWeight: 'bold'

    }
})

