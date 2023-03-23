import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Room from "../AuctionRoom/Room";
import Home from "../Home/Home";

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = (): JSX.Element => {
    return(
        <BottomTab.Navigator
            
            screenOptions={({route})=>({
                headerShown : false,
                
            })}
        >
            <BottomTab.Screen name="Home" children={Home} />
            <BottomTab.Screen name="Auction Room" children={Room} />
        </BottomTab.Navigator>
    )
}

const Main = () => {
    return(
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    );
}

export default Main;