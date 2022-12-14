import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SurfboardListScreen from '../screens/SurfboardListScreen';
import SurfboardDetailScreen from '../screens/SurfboardDetailScreen';
import { SurfboardStackParamList } from './navigationTypes';

const Stack = createNativeStackNavigator<SurfboardStackParamList>();

const SurfboardsStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ animation: 'none' }}>
            <Stack.Screen name="SurfboardList" component={SurfboardListScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SurfboardDetail" component={SurfboardDetailScreen} />
        </Stack.Navigator>
    );
};

export default SurfboardsStackNavigator;
