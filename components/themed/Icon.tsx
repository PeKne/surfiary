import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { FontAwesome5IconProps } from 'react-native-vector-icons/FontAwesome5';
import useThemeColor from '../../hooks/useThemeColor';

const Icon = ({ style, color, size = 20, ...otherProps }: FontAwesome5IconProps) => {
    const themeColor = useThemeColor('text');
    const backgroudColor = useThemeColor('background');
    const themed = { backgroudColor, marginTop: -3 };

    return <FontAwesome style={[themed, style]} size={size} color={color ?? themeColor} solid {...otherProps} />;
};

export default Icon;
