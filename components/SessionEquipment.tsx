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

type SessionEquipmentProps = {
    data: {
        wetsuit_id?: number;
        wetsuit_name?: string;
        surfboard_id: number;
        surfboard_name: string;
    };
};
const SessionEquipment = ({
    data: { wetsuit_id = undefined, wetsuit_name = undefined, surfboard_id, surfboard_name },
}: SessionEquipmentProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.equipment}>
                {surfboard_id && surfboard_name && (
                    <>
                        <ImageIcon name="surf" />
                        <View style={styles.titleWrapper}>
                            <Text style={styles.equipmentTitle}> {surfboard_name}</Text>
                        </View>
                    </>
                )}
                {wetsuit_id && wetsuit_name && (
                    <>
                        <ImageIcon name="wetsuit" />
                        <View style={styles.titleWrapper}>
                            <Text style={styles.equipmentTitle}> {wetsuit_name}</Text>
                        </View>
                    </>
                )}
            </View>
        </View>
    );
};

export default SessionEquipment;
