import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { EquipmentStackScreenProps } from '../navigation/navigationTypes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

const EquipmentListScreen = ({ navigation }: EquipmentStackScreenProps<'EquipmentList'>) => {
    // const db = useDatabaseContext();
    // db.readLocation('name', 'board').then(res => console.log(res));
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Equipment Tab</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Pressable onPress={() => navigation.navigate('EquipmentDetail')}>
                <Text> go to Detail screen</Text>
            </Pressable>
        </View>
    );
};

export default EquipmentListScreen;
