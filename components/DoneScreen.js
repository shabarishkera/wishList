import {useState,useEffect }from 'react'
import {Text,View,TouchableWithoutFeedback,FlatList,ToastAndroid} from 'react-native'
import {get,put,getdone} from '../Database/sql'
import Individual from './Individual';
import EmptyList from './EmptyList'
export default function DoneScreen()
{
 const [data,setdata]=useState([]);
   useEffect(()=>{
    async function  getfromdb()
    {
        await getdone(1,setdata);
    }
    getfromdb();
    //filter only needed;
    const tempdata=data.filter((item)=> {return item.isDone==1});
    setdata(tempdata);
    ToastAndroid.show('Tap On An Item To Mark It As Done',ToastAndroid.LONG);
   },[]);
   console.log(data.length)
   if (data.length==0)
   	return <EmptyList/>
   else
return(
<>
<View>
 <FlatList data={data}  ListEmptyComponent={EmptyList} numColumns={2} key={(item)=>item.item.id} renderItem={({item})=><TouchableWithoutFeedback><Individual  canPress={false} key={item.id} item={item}/></TouchableWithoutFeedback>} />

</View>

</>


	)



}