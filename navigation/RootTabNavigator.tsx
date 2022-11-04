/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome5 as FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { Colors } from '../constants';
import useColorScheme from '../hooks/useColorScheme';
import EquipmentStackNavigator from './EquipmentStackNavigator';
import { RootTabParamList } from './navigationTypes';
import LinkingConfiguration from './LinkingConfiguration';
import SessionStackNavigator from './SessionStackNavigator';
import StatsScreen from '../screens/StatsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const TabBarIcon = (props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) => {
    const { name, color } = props;
    return <FontAwesome size={23} style={{ marginBottom: -3 }} name={name} color={color} solid />;
};

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
                    tabBarIcon: ({ color }) => TabBarIcon({ name: 'flag', color }),
                }}
            />
            <BottomTab.Screen
                name="EquipmentStackNavigator"
                component={EquipmentStackNavigator}
                options={{
                    title: 'Equipment',
                    headerShown: false,
                    tabBarIcon: ({ color }) => TabBarIcon({ name: 'tshirt', color }),
                }}
            />
            <BottomTab.Screen
                name="Stats"
                component={StatsScreen}
                options={{ title: 'Statistics', tabBarIcon: ({ color }) => TabBarIcon({ name: 'chart-line', color }) }}
            />
            <BottomTab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ title: 'Settings', tabBarIcon: ({ color }) => TabBarIcon({ name: 'cog', color }) }}
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
