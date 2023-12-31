import {Pressable, View, StyleSheet, Text, ToastAndroid,Alert} from 'react-native'
import {useContext} from 'react'
import {setdone,get,del} from '../Database/sql'
import {context} from '../Store/Context'
export default function Individual({item,canPress,color}) {
     const  {data,setdata}=useContext(context);
     const setDone=async()=>
    {
 console.log("set "+item.id+ "as done");
 await setdone(item.id);
  await get(setdata)

    }
    const handlepress=()=>
    {
        //mark as commleted 
        Alert.alert('Mark As Done !', 'Are sure to mark this as completed?', [
      
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress:setDone},
    ]);

    };
    const deletetask=async()=>{
        await del(item.id);
        await get(setdata);

    }
    const handleLongpress=()=>
    {
        //mark as commleted 
        Alert.alert('Delte Item !', 'Are sure to Delete this item ?', [
      
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress:deletetask},
    ]);

    };
   
return <View style={[style.totalwrapper]}>
<Pressable onPress={canPress?handlepress:()=>{}} onLongPress={handleLongpress}android_ripple={{color: 'orange', opacity: 1, borderless:true}}>
<View style={[style.container,{backgroundColor:color}]}>
        <Text style={style.title}>{item.title}</Text>
         

        </View>
        </Pressable >
        <Text style={style.date}>set on  :{item.dateinfo}</Text>
       </View>
}

const style = StyleSheet.create({
    container: {
        backgroundColor:'orange',
        elevation: 5,
        borderRadius: 6,
        minHeight: 150,
        padding:5,
        textAlign:  'center' ,
        alignItems:  'center'  ,
        justifyContent: 'center'
    },
    totalwrapper:{
        flex:1,
        padding:10,
        marginBottom:9

    },
  
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign:'center'
    },
   
    date: {

        color:'gray',
        alignSelf:  'flex-end',
        opacity: .6
    },

    amount: {
        color:'red',
        fontWeight: 'bold'

    }
})

