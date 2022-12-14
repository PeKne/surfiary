import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WetsuitStackParamList } from './navigationTypes';
import WetsuitListScreen from '../screens/WetsuitListScreen';
import WetsuitDetailScreen from '../screens/WetsuitDetailScreen';

const Stack = createNativeStackNavigator<WetsuitStackParamList>();

const WetsuitStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ animation: 'none' }}>
            <Stack.Screen name="WetsuitList" component={WetsuitListScreen} options={{ headerShown: false }} />
            <Stack.Screen name="WetsuitDetail" component={WetsuitDetailScreen} />
        </Stack.Navigator>
    );
};

export default WetsuitStackNavigator;
