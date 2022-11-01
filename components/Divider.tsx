import React from 'react';
import { ViewStyle } from 'react-native';
import useThemeColor from '../hooks/useThemeColor';
import { View } from './themed';

const Divider = () => {
    const mutedColor = useThemeColor('muted');
    const style: ViewStyle = {
        borderWidth: 0.5,
        borderColor: mutedColor,
        width: 'auto',
        marginTop: 9,
        marginBottom: 10,
        marginHorizontal: -5,
        zIndex: -100,
    };
    return <View style={style} />;
};

export default Divider;
