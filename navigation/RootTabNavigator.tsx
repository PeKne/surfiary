import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { Colors } from '../constants';
import { Icon } from '../components/themed';
import useColorScheme from '../hooks/useColorScheme';
import { RootTabParamList } from './navigationTypes';
import LinkingConfiguration from './LinkingConfiguration';
import SessionStackNavigator from './SessionStackNavigator';
import StatsScreen from '../screens/StatsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EquipmentTabNavigator from './EquipmentTabNavigator';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const RootTabNavigator = () => {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="SessionStackNavigator"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}
        >
            <BottomTab.Screen
                name="SessionStackNavigator"
                component={SessionStackNavigator}
                options={{
                    title: 'Sessions',
                    headerShown: false,
                    tabBarIcon: ({ color }) => Icon({ name: 'flag', color }),
                }}
            />
            <BottomTab.Screen
                name="EquipmentTabNavigator"
                component={EquipmentTabNavigator}
                options={{
                    title: 'Equipment',
                    headerShown: false,
                    tabBarIcon: ({ color }) => Icon({ name: 'tshirt', color }),
                }}
            />
            <BottomTab.Screen
                name="Stats"
                component={StatsScreen}
                options={{
                    title: 'Statistics',
                    tabBarIcon: ({ color }) => Icon({ name: 'chart-line', color }),
                }}
            />
            <BottomTab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ title: 'Settings', tabBarIcon: ({ color }) => Icon({ name: 'cog', color }) }}
            />
        </BottomTab.Navigator>
    );
};

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
    return (
        <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootTabNavigator />
        </NavigationContainer>
    );
};

export default Navigation;
