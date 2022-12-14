import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { View, Text } from './themed';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    message: {
        textAlign: 'center',
    },
});

export type ListPlaceholderProps = {
    message: string;
    buttonTitle: string;
    buttonOnPress?(): void;
};
const ListPlaceholder = ({ message, buttonTitle, buttonOnPress }: ListPlaceholderProps) => {
    return (
        <View style={styles.container}>
            <Text format="h2" style={styles.message}>
                {message}
            </Text>
            <Button title={buttonTitle} onPress={buttonOnPress} />
        </View>
    );
};

export default ListPlaceholder;
