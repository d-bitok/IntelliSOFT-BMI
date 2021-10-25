import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';
import { isIphoneX } from 'react-native-iphone-x-helper';

import {
    Home,
    Register,
    Profile,
} from '../screens';

import {
    COLORS,
    SIZES,
    icons,
} from '../constants';

const Tab = createBottomTabNavigator();

export default function Tabs () {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.black1 : null

                    switch (route.name) {
                        case 'HomePage':
                            
                            return (
                                <View>
                                    <Image
                                        source={!focused ? icons.home_light : icons.home_dark}
                                        resizeMode='contain'
                                        style={{
                                            width: 24,
                                            height: 24,
                                            opacity: focused ? null : 0.3,
                                            tintColor: tintColor,
                                        }}
                                    />
                                </View>
                            )

                        case 'Register':
                            
                            return (
                                <View>
                                    <Image
                                        source={!focused ? icons.plus_light : icons.plus_dark}
                                        resizeMode='contain'
                                        style={{
                                            width: 24,
                                            height: 24,
                                            opacity: focused ? null : 0.3,
                                            tintColor: tintColor,
                                        }}
                                    />
                                </View>
                            )

                        case 'Profile':
                            
                            return (
                                <View>
                                    <Image
                                        source={!focused ? icons.profile_light : icons.profile_dark}
                                        resizeMode='contain'
                                        style={{
                                            width: 24,
                                            height: 24,
                                            opacity: focused ? null : 0.3,
                                            tintColor: tintColor,
                                        }}
                                    />
                                </View>
                            )
                    
                        default:
                            break;
                    }
                }
            })}
        >
            <Tab.Screen name='HomePage' component={Home} />
            <Tab.Screen name='Register' component={Register} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}