import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import SurfboardStackNavigator from './SurfboardStackNavigator';
import { EquipmentTabParamList } from './navigationTypes';
import useThemeColor from '../hooks/useThemeColor';
import WetsuitStackNavigator from './WetsuitStackNavigator';
import ImageIcon from '../components/ImageIcon';

const Tab = createMaterialTopTabNavigator<EquipmentTabParamList>();

const ICON_SIZE = 26;

const EquipmentTabNavigator = () => {
    const safeAreaInsents = useSafeAreaInsets();
    const primaryColor = useThemeColor('text');

    const handleTabBarVisibility = (currentRoute: string): ViewStyle => {
        const visibleOnScreens = ['SurfboardList', 'WetsuitList'];
        if (visibleOnScreens.includes(currentRoute)) {
            return { paddingTop: safeAreaInsents.top, display: 'flex' }; // show tabs
        }
        return { display: 'none' }; // hide tabs
    };

    return (
        <Tab.Navigator
            initialRouteName="SurfboardStackNavigator"
            screenOptions={({ route }) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? 'SurfboardList';
                return {
                    animationEnabled: false,
                    tabBarActiveTintColor: primaryColor,
                    tabBarPressColor: primaryColor,
                    tabBarIndicatorStyle: { backgroundColor: primaryColor },
                    tabBarItemStyle: { flexDirection: 'row' },
                    tabBarStyle: handleTabBarVisibility(routeName),
                };
            }}
        >
            <Tab.Screen
                name="SurfboardStackNavigator"
                component={SurfboardStackNavigator}
                options={{
                    title: 'Boards',
                    tabBarIcon: () => ImageIcon({ name: 'surf', size: ICON_SIZE }),
                }}
            />
            <Tab.Screen
                name="WetsuitStackNavigator"
                component={WetsuitStackNavigator}
                options={{
                    title: 'Wetsuits',
                    tabBarIcon: () => ImageIcon({ name: 'wetsuit', size: ICON_SIZE }),
                }}
            />
        </Tab.Navigator>
    );
};

export default EquipmentTabNavigator;
