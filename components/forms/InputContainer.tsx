import React from 'react';
import { StyleSheet } from 'react-native';
import FontSizes from '../../constants/FontSizes';
import { View, Text } from '../themed';
import { InputContainerProps } from './formTypes';

const styles = StyleSheet.create({
    container: { flexDirection: 'row', padding: 10 },
    titleWrapper: {
        minWidth: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {},
    inputWrapper: {
        flex: 1,
        paddingHorizontal: 5,
    },
    error: {
        fontSize: FontSizes.hint,
        color: 'red',
    },
});

const InputContainer = ({ children, title, errorMessage = undefined }: InputContainerProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text format="h3">{title}</Text>
            </View>
            <View style={styles.inputWrapper}>
                {children}
                {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
            </View>
        </View>
    );
};

export default InputContainer;
