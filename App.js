import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import{NavigationContainer} from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox';

import Routes from './src/routes/index'
import react from 'react';

export default function App() {
  return (
    <NavigationContainer >
      <StatusBar hidden={true}/>
    <Routes/>
      
    </NavigationContainer>
  );
}

