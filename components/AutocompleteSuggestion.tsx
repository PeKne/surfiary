import React from 'react';
import { StyleSheet, Pressable, GestureResponderEvent } from 'react-native';
import useThemeColor from '../hooks/useThemeColor';

import { Text } from './themed';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 7,
        paddingVertical: 4,
        borderLeftWidth: 0.4,
    },
});

type AutocompleteSuggestion = {
    text: string;
    onPress?(tag: GestureResponderEvent): void;
};

const AutocompleteSuggestion = ({ text, onPress = undefined }: AutocompleteSuggestion) => {
    const borderColor = useThemeColor('text');
    const backgroundColor = useThemeColor('background');
    return (
        <Pressable style={{ backgroundColor, borderColor, ...styles.container }} onPress={onPress}>
            <Text>{text}</Text>
        </Pressable>
    );
};
export default AutocompleteSuggestion;
