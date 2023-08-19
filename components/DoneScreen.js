import {useState,useEffect,useContext }from 'react'
import {Text,View,TouchableWithoutFeedback,FlatList,ToastAndroid} from 'react-native'
import {get,put,getdone} from '../Database/sql'
import Individual from './Individual';
import EmptyList from './EmptyList';
import {context} from '../Store/Context'
export default function DoneScreen()
{
 const  {data,setdata}=useContext(context);
   useEffect(()=>{
    async function  getfromdb()
    {
        await get(setdata);
    }
    getfromdb();

    ToastAndroid.show('Tap On An Item To Mark It As Done',ToastAndroid.LONG);
   },[]);
   const handlerender=({item})=>
   {

   	if(item.isDone==0)
   		return ;
  return (<TouchableWithoutFeedback><Individual  canPress={false} key={item.id} item={item}/></TouchableWithoutFeedback>);


   }
   
 
return(
<>
<View>
 <FlatList data={data}  ListEmptyComponent={EmptyList} numColumns={2} key={(item)=>item.item.id} renderItem={handlerender} />

</View>

</>


	)



}