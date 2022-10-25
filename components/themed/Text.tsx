import React from 'react';
import { StyleSheet, Text as DefaultText, TextProps as DefaultTextProps } from 'react-native';

import useThemeColor from '../../hooks/useThemeColor';

type TextProps = DefaultTextProps & {
    format?: 'h1' | 'h2' | 'h3' | 'body';
};

const styles = StyleSheet.create({
    body: {
        fontSize: 15,
    },
    h1: {
        fontSize: 21,
        fontWeight: '600',
    },
    h2: {
        fontSize: 18,
        fontWeight: '600',
    },
    h3: {
        fontSize: 16,
        fontWeight: '600',
    },
});

const Text = ({ style, format = 'body', ...otherProps }: TextProps) => {
    const color = useThemeColor('text');

    return <DefaultText style={[{ color }, styles[format], style]} {...otherProps} />;
};

export default Text;
