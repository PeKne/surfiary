import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SessionListScreen from '../screens/SessionListScreen';
import SessionDetailScreen from '../screens/SessionDetailScreen';
import { SessionStackParamList } from './navigationTypes';
import { Icon } from '../components/themed';
import SessionEditScreen from '../screens/SessionEditScreen';

const Stack = createNativeStackNavigator<SessionStackParamList>();

const SessionStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SessionList"
                component={SessionListScreen}
                options={({ navigation }) => {
                    return {
                        title: 'Surf Sessions',
                        headerRight: () =>
                            Icon({
                                name: 'plus-square',
                                onPress: () => navigation.navigate('SessionEdit'),
                            }),
                    };
                }}
            />
            <Stack.Screen name="SessionDetail" component={SessionDetailScreen} />
            <Stack.Screen name="SessionEdit" component={SessionEditScreen} />
        </Stack.Navigator>
    );
};

export default SessionStackNavigator;
