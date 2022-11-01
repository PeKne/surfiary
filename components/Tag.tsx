import React from 'react';
import { StyleSheet, Pressable, GestureResponderEvent } from 'react-native';
import useThemeColor from '../hooks/useThemeColor';

import { Text } from './themed';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 4,
        paddingVertical: 2,
        marginHorizontal: 5,
        marginVertical: 3,
        borderRadius: 6,
        borderWidth: 2,
    },
});

type TagProps = {
    label: string;
    onPress?(event: GestureResponderEvent): void;
};

const Tag = ({ label, onPress = undefined }: TagProps) => {
    const textColor = useThemeColor('text');
    return (
        <Pressable
            style={({ pressed }) => {
                return { opacity: onPress && pressed ? 0.7 : 1, borderColor: textColor, ...styles.container };
            }}
            onPress={onPress}
        >
            <Text>{label}</Text>
        </Pressable>
    );
};
export default Tag;
