import {Pressable, View, StyleSheet, Text, ToastAndroid} from 'react-native'
export default function Individual({item}) {
console.log(item);
return <View style={style.totalwrapper}>
        <Text style={style.title}>{item.title}</Text>
       </View>
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        marginVertical: 10,
        backgroundColor:'black',
        flexDirection: 'row',
        elevation: 5,
        borderRadius: 6,
        justifyContent: 'space-between',
        minHeight: 100,
       
    },
    totalwrapper:{
        marginBottom:50,

    },
    decide: {
        flex: 1,
        flexDirection: 'row'


    },
    title: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',

        color: 'red'
    },
    amontcontiner: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        minWidth: 100,
        height: 50
    },
    date: {

        color:'red'
    },

    amount: {
        color:'red',
        fontWeight: 'bold'

    }
})

