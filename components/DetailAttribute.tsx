import React from 'react';
import { StyleSheet } from 'react-native';
import { DetailAttributeProps } from './componentsTypes';
import { View, Text, Icon } from './themed';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    iconContainer: {
        width: '12%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        width: '22%',
        fontWeight: '600',
        textAlign: 'center',
    },
    value: {
        width: '60%',
        textAlign: 'center',
    },
});

const DetailAttribute = ({ icon, title, value }: DetailAttributeProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon name={icon} size={25} />
            </View>
            <Text format="h2" style={styles.title}>
                {title}:
            </Text>
            <Text style={styles.value} format="h2">
                {value}
            </Text>
        </View>
    );
};

export default DetailAttribute;
