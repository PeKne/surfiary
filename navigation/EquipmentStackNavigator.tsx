import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EquipmentListScreen from '../screens/EquipmentListScreen';
import EquipmentDetailScreen from '../screens/EquipmentDetailScreen';
import { EquipmentStackParamList } from './navigationTypes';

const Stack = createNativeStackNavigator<EquipmentStackParamList>();

const EquipmentStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="EquipmentList" component={EquipmentListScreen} />
            <Stack.Screen name="EquipmentDetail" component={EquipmentDetailScreen} />
        </Stack.Navigator>
    );
};

export default EquipmentStackNavigator;
