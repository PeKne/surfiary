import React from 'react';
import { ScrollView as DefaultScrollView, ScrollViewProps as DefaultScrollViewProps } from 'react-native';
import useThemeColor from '../../hooks/useThemeColor';

const ScrollView = ({ style, children, ...otherProps }: DefaultScrollViewProps) => {
    const backgroundColor = useThemeColor('background');
    return (
        <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps}>
            {children}
        </DefaultScrollView>
    );
};

export default ScrollView;
