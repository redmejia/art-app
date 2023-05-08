import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Room from "../AuctionRoom/Room";
import Home from "../Home/Home";
import { Image, StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Details } from "../ArtDetails/Deatails";

const BottomTab = createBottomTabNavigator()
const stack = createStackNavigator()

const BottomTabNavigator = (): JSX.Element => {
    return (
        <BottomTab.Navigator

            screenOptions={({ route }) => ({
                headerShown: false,

                tabBarIcon: () => {

                    if (route.name === "Room") {
                        return (
                            <View >
                                <Image
                                    style={syles.iconImage}
                                    source={require('../public/buttons/auction.png')}
                                />
                            </View>
                        )
                    }

                    if (route.name === "Home") {
                        return (
                            <View >
                                <Image
                                    style={syles.iconImage}
                                    source={require('../public/buttons/home.png')}
                                />
                            </View>
                        )
                    }
                },

                tabBarStyle: {
                    height: 80,
                    // paddingHorizontal: 15,
                    paddingTop: 10,
                    backgroundColor: '#A74592',
                    // position: 'absolute',
                    borderTopWidth: 0,
                    borderTopLeftRadius: 30

                },
                headerStyle: {
                    backgroundColor: "#A74592",
                    // backgroundColor: "#000"
                }

            })}
        >
            <BottomTab.Screen name="Home" component={Home}
                options={{ title: "" }}
            />
            <BottomTab.Screen name="Room" component={Room}
                options={{ title: "" }}
            />
        </BottomTab.Navigator>
    )
}

const Main = () => {
    return (
        <>
            <NavigationContainer>
                {/* <BottomTabNavigator /> */}
                <stack.Navigator>
                    <stack.Screen 
                        name="bottom" 
                        component={BottomTabNavigator}
                        options={{
                            headerShown : false,
                            title : "Room"
                        }}
                    />
                    <stack.Screen name="details" component={Details} 
                        options={{title: ""}}
                    />
                </stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const syles = StyleSheet.create({
    iconImage: {
        width: 40,
        height: 40,
        resizeMode: 'center'
    }
})

export default Main;