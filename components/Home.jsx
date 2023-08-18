import React from 'react'
import Dialog from "react-native-dialog";
import {
    View,
    StyleSheet,
    ActivityIndicator,
    Button,
    Text,
    FlatList,
    ScrollView,
    TouchableWithoutFeedback,
    ToastAndroid,Alert
} from 'react-native';
import IonIcons from 'react-native-vector-icons/AntDesign'
import Individual from './Individual'
import {get,getdone,put} from '../Database/sql'
import {useState,useEffect} from 'react';
import {getdate} from '../Utils/Date'
export default function Home({route}) {
   const [data,setdata]=useState([]);
   const [text,settext]=useState('');
   const [visible,setvisible]=useState(false);
   useEffect(()=>{
    async function  getfromdb()
    {
        await getdone(0,setdata);
    }
    getfromdb();

    ToastAndroid.show('Tap On An Item To Mark It As Done',ToastAndroid.LONG);
    
   },[]);
    console.log(data);
   const handletextchange=(text)=>{
settext(text);
   }
   const handlecancel=()=>
   {
    settext('');
    setvisible(false);
   }
   const handleAdd=async()=>
   {
    if(text.length<=5)
    {
        Alert.alert("Title Too Small","The title should be atleast 6 characte" );  return ;  
    }
    setvisible(false);
    const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const date = dd + '/' + mm + '/' + yyyy;
    console.log(date);
    await put(text,date);
    await get(setdata);
   }
   const handlerender=({item})=>{
    <>
    <Text>{item.title}</Text>
    </>
   }
     return (
        <>
     <Dialog.Container visible={visible}>
      <Dialog.Title>ADD A Task</Dialog.Title>
      
      <Dialog.Input inputMode='text' maxLength={130} onChangeText={handletextchange}></Dialog.Input>
      <Dialog.Button label="Cancel" onPress={handlecancel} />
      <Dialog.Button label="OK" onPress={handleAdd} />
    </Dialog.Container>
       <FlatList data={data}   numColumns={2}  key={(item)=>item.item.id} renderItem={({item})=><TouchableWithoutFeedback><Individual key={item.id} canPress={true} setdata={setdata} item={item}/></TouchableWithoutFeedback>} />
<IonIcons name="pluscircleo" onPress={()=>{setvisible(true)}} style={styles.add} size={50}color={'#FF5E0E'} />
        </>
    )
}

const styles=StyleSheet.create({
    add:{
        width:50,
        height:50,
        display: 'flex',
        backgroundColor:'white',
        position:'absolute',
        borderRadius:25,
        bottom: 10,
        right:10,
        elevation:19
    }
})
