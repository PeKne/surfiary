import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { SessionStackScreenProps } from '../navigation/navigationTypes';

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

const SessionDetailScreen = ({ navigation }: SessionStackScreenProps<'SessionDetail'>) => {
    // const db = useDatabaseContext();
    // db.readLocation('name', 'board').then(res => console.log(res));
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Session Detail</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    );
};

export default SessionDetailScreen;