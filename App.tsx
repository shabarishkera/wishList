/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';


import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {init,put,get} from './Database/sql';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './components/Home'
import {useEffect,useState} from 'react'
import DoneScreen from './components/DoneScreen'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
type SectionProps = PropsWithChildren<{
  title: string;
}>;


const Tab = createBottomTabNavigator();


function App(): JSX.Element {
  const [items,setItems]=useState([]);
  useEffect(()=>{
    const callinit=async()=>{

      await init();
    //await put();
  const data= await get(setItems);
     
    }
    callinit();
   
},[])
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
   
<NavigationContainer style={{flex:1}}>
  
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      
     
      <Tab.Navigator  >
      <Tab.Screen  name="home" component={Home}  initialParams={items}
      options={{
          tabBarLabel: 'Remaining',
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="calendar" color={'black'} size={24} />
          ),
        }}  />
        <Tab.Screen name="Done" 
        initialParams={{items}}
        options={{
          tabBarLabel: 'Done',
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="calendar" color={'black'} size={24} />
          ),
        }} component={DoneScreen}/>
      </Tab.Navigator>
     
   
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
