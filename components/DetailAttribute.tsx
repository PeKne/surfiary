import React from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome5IconProps } from 'react-native-vector-icons/FontAwesome5';
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
export type DetailAttributeProps = {
    iconName: FontAwesome5IconProps['name'];
    title: string;
    value: string;
};
const DetailAttribute = ({ iconName, title, value }: DetailAttributeProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon name={iconName} size={20} />
            </View>
            <Text style={styles.title} format="h3">
                {title}:
            </Text>
            <Text style={styles.value} format="h3">
                {value}
            </Text>
        </View>
    );
};

export default DetailAttribute;
