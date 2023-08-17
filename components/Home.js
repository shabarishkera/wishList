import React from 'react'
import {
    View,
    StyleSheet,
    ActivityIndicator,
    Button,
    Text,
    FlatList
} from 'react-native';
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
   const handlerender=(item)=>{
    <Text>{item}</Text>
   }
     return (
        <FlatList data={data} contentContainerStyle={{paddingBottom:56}}
        showsVerticalScrollIndicator={false}
            renderItem={handlerender}
            key={
                (item) => item.item.id
        }></FlatList>
    )
}

