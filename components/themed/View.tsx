import React from 'react';
import { View as DefaultView } from 'react-native';
import useThemeColor from '../../hooks/useThemeColor';

const View = ({ style, children, ...otherProps }: React.ComponentProps<typeof DefaultView>) => {
    const backgroundColor = useThemeColor('background');
    return (
        <DefaultView style={[{ backgroundColor }, style]} {...otherProps}>
            {children}
        </DefaultView>
    );
};

export default View;
