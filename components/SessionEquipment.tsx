import React from 'react';
import { StyleSheet } from 'react-native';

import ImageIcon from './ImageIcon';
import { View, Text } from './themed';

const styles = StyleSheet.create({
    container: {
        marginLeft: -5,
        marginVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    equipment: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
    },
    titleWrapper: {
        display: 'flex',
        justifyContent: 'center',
        paddingRight: 10,
    },
    equipmentTitle: {
        textAlign: 'center',
        fontWeight: '600',
    },
});

const SessionEquipment = () => {
    // TODO: make clickable on detail screen
    return (
        <View style={styles.container}>
            <View style={styles.equipment}>
                <ImageIcon icon="surf" />
                <View style={styles.titleWrapper}>
                    <Text style={styles.equipmentTitle}> Darkside</Text>
                </View>
                <ImageIcon icon="wetsuit" />
                <View style={styles.titleWrapper}>
                    <Text style={styles.equipmentTitle}> O'neil 4.3</Text>
                </View>
            </View>
        </View>
    );
};

export default SessionEquipment;
