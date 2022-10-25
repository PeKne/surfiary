import React, { TextInput as DefaultTextInput, TextInputProps as DefaultTextInputProps } from 'react-native';

import useThemeColor from '../../hooks/useThemeColor';

const TextInput = ({ style, ...otherProps }: DefaultTextInputProps) => {
    const color = useThemeColor('text');
    const mutedColor = useThemeColor('muted');

    return <DefaultTextInput style={[{ color }, style]} placeholderTextColor={mutedColor} {...otherProps} />;
};

export default TextInput;
