import { NavigationContainer } from "@react-navigation/native";
import {Text, View} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenStore  from "../screens/Screen.Store"


const Stack = createNativeStackNavigator();

const Navigation = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{headerShown:false}} component={ScreenStore} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation