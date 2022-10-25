import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/themed';
import { RootTabScreenProps } from '../navigation/navigationTypes';

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

const SettingsScreen = ({ navigation }: RootTabScreenProps<'Settings'>) => {
    // const db = useDatabaseContext();
    // db.readLocation('name', 'board').then(res => console.log(res));
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One XXsxL</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    );
};

export default SettingsScreen;
