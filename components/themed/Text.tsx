import React from 'react';
import { StyleSheet, Text as DefaultText, TextProps as DefaultTextProps } from 'react-native';

import useThemeColor from '../../hooks/useThemeColor';
import { FontSizes } from '../../constants';

type TextProps = DefaultTextProps & {
    format?: 'h1' | 'h2' | 'h3' | 'body';
};

const styles = StyleSheet.create({
    body: {
        fontSize: FontSizes.body,
    },
    h1: {
        fontSize: FontSizes.h1,
        fontWeight: '600',
    },
    h2: {
        fontSize: FontSizes.h2,
        fontWeight: '600',
    },
    h3: {
        fontSize: FontSizes.h3,
        fontWeight: '600',
    },
});

const Text = ({ style, format = 'body', ...otherProps }: TextProps) => {
    const color = useThemeColor('text');

    return <DefaultText style={[{ color }, styles[format], style]} {...otherProps} />;
};

export default Text;
