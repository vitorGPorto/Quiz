import React from "react";
//import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import NumberQuest from "../pages/NumberQuest";
import Start from '../pages/Start';
import Questions from '../pages/Questions/index';
import Report from "../pages/Report";

const Stack = createNativeStackNavigator();

function StackRoutes(){

    return(
  
        <Stack.Navigator>
            <Stack.Screen
             name="Home" 
            component={Home}
            options={{
                headerShown: false
            }}
            />
              <Stack.Screen
             name="Start" 
            component={Start}
            options={{
                headerShown: false
            }}
            />
             <Stack.Screen
             name="NumberQuest" 
            component={NumberQuest}
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
             name="Questions" 
            component={Questions}
            options={{
                headerShown: false
            }}
            />
             <Stack.Screen
             name="Report"
             component={Report}
             options={{
              headerShown: false
             }}
             />
            
        </Stack.Navigator>
  
    )
}
export default StackRoutes;
