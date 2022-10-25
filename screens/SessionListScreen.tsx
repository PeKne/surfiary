import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import Divider from '../components/Divider';
import SessionCard from '../components/SessionCard';
import { SafeAreaView } from '../components/themed';
import { SessionStackScreenProps } from '../navigation/navigationTypes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    flatContainer: { paddingHorizontal: 18, justifyContent: 'center', paddingTop: 5 },
});

const MOCKDATA = [1, 2, 3, 4, 5, 6, 7, 8]; // TODO delete
const SessionListScreen = ({ navigation }: SessionStackScreenProps<'SessionList'>) => {
    // const db = useDatabaseContext();
    // db.readLocation('name', 'board').then(res => console.log(res));

    const openDetailScreen = () => {
        navigation.navigate('SessionDetail');
    };
    const renderItem = () => <SessionCard openDetail={openDetailScreen} />;
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                contentContainerStyle={styles.flatContainer}
                data={MOCKDATA}
                renderItem={renderItem}
                ItemSeparatorComponent={Divider}
                keyExtractor={item => item.toString()}
            />
        </SafeAreaView>
    );
};

export default SessionListScreen;
