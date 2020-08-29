/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {InfoScreen} from "./src/Screens/InfoScreen";
import {ContactsScreen} from "./src/Screens/ContactsScreen";

const Stack = createStackNavigator();

const App = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="contacts_screen"
                                 headerMode="none">
                    <Stack.Screen name="contacts_screen"
                                  component={ContactsScreen}/>
                    <Stack.Screen name="info_screen"
                                  component={InfoScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default App;
