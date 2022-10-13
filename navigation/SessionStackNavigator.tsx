import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SessionListScreen from '../screens/SessionListScreen';
import SessionDetailScreen from '../screens/SessionDetailScreen';
import { SessionStackParamList } from './navigationTypes';

const Stack = createNativeStackNavigator<SessionStackParamList>();

const SessionStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SessionList" component={SessionListScreen} options={{ title: 'Surf Sessions' }} />
            <Stack.Screen name="SessionDetail" component={SessionDetailScreen} options={{ title: 'Surf Sessions' }} />
        </Stack.Navigator>
    );
};

export default SessionStackNavigator;
