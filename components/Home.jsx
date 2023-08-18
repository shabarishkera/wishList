import React from 'react'
import {
    View,
    StyleSheet,
    ActivityIndicator,
    Button,
    Text,
    FlatList,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import IonIcons from 'react-native-vector-icons/AntDesign'
import Individual from './Individual'
import {get} from '../Database/sql'
import {useState,useEffect} from 'react';
export default function Home({route}) {
   const [data,setdata]=useState([]);
   useEffect(()=>{
    async function  getfromdb()
    {
        await get(setdata);
    }
    getfromdb();
    
   },[])
   const handlerender=({item})=>{
    <>
    <Text>{item.title}</Text>
    </>
   }
     return (
        <>
     
       <FlatList data={data}   numColumns={2} key={(item)=>item.item.id} renderItem={({item})=><TouchableWithoutFeedback><Individual key={item.id} item={item}/></TouchableWithoutFeedback>} />
<IonIcons name="pluscircleo" onPress={()=>{console.log("presed")}} style={styles.add} size={50}color={'#FF5E0E'} />
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
