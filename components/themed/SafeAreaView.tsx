import React, { ViewProps as DefaultViewProps, SafeAreaView as DefaultSafeAreaView } from 'react-native';

import useThemeColor from '../../hooks/useThemeColor';

const SafeAreaView = ({ style, ...otherProps }: DefaultViewProps) => {
    const backgroundColor = useThemeColor('background');
    return <DefaultSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export default SafeAreaView;
