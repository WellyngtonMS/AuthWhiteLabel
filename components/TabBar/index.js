import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";
import { ButtonLogout } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import { firebase } from '../../config';

import Main from '../../pages/Main';
import AddDoor from '../../pages/AddDoor';

const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#d23e44',
                    borderRadius: 15,
                    height: 85,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.5,
                    elevation: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            }}
        >
            <Tab.Screen
                name="Main"
                component={Main}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 25,
                            }}
                        >
                            <Ionicons
                                name="home-outline"
                                size={26}
                                color={"#fff"}
                            ></Ionicons>
                            <Text style={{ fontWeight: focused ? "700" : "400", fontSize: 12, color: "#fff" }}>Home</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="AddDoor" component={AddDoor}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 25,
                            }}
                        >
                            <Ionicons
                                name="add-circle-outline"
                                size={26}
                                color={"#fff"}
                            ></Ionicons>
                            <Text style={{ fontWeight: focused ? "700" : "400", fontSize: 12, color: "#fff" }}>Add Door</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Button" component={ButtonLogout}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            onPress={() => firebase.auth().signOut()}
                        >
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 25,
                            }}
                        >
                            <Ionicons
                                name="log-out-outline"
                                size={26}
                                color={"#fff"}
                            ></Ionicons>
                            <Text style={{ fontWeight: focused ? "700" : "400", fontSize: 12, color: "#fff" }}>Logout</Text>
                        </View>
                        </TouchableOpacity>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabBar;