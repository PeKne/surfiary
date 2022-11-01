import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View, Icon } from '../components/themed';

import { SessionStackScreenProps } from '../navigation/navigationTypes';
import DetailAttribute from '../components/DetailAttribute';
import Divider from '../components/Divider';
import SessionEquipment from '../components/SessionEquipment';
import TagsInline from '../components/TagsInline';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'flex-start',
        paddingHorizontal: 10,
    },
    headerContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
    },
    sectionContainer: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 10,
        // marginHorizontal: ,
    },
    equipmentWrapper: {
        paddingTop: 5,
        width: '100%',
        alignItems: 'center',
    },
});

const SessionDetailScreen = ({ navigation }: SessionStackScreenProps<'SessionDetail'>) => {
    useEffect(() => {
        navigation.setOptions({
            title: 'Detailed screen',
            headerRight: () => Icon({ name: 'pencil-square-o', onPress: () => navigation.navigate('SessionEdit') }),
        });
    }, [navigation]);
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <DetailAttribute icon="map-marker" title="Location" value="Echo beach, Canggu" />
                <DetailAttribute icon="calendar" title="Date" value="2nd July 2022" />
                <DetailAttribute icon="clock-o" title="Duration" value="2 hours" />
            </View>
            <Divider />

            <View style={styles.sectionContainer}>
                <Text format="h2">Equipment:</Text>
                {/* TODO make clickable */}
                <View style={styles.equipmentWrapper}>
                    <SessionEquipment />
                </View>
            </View>
            <View style={styles.sectionContainer}>
                <Text format="h2">Notes:</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus a diam in tempus. Aliquam
                    sagittis ligula at elit congue rhoncus. Integer feugiat, lorem sed rhoncus auctor, nibh eros
                    condimentum nibh, quis scelerisque turpis metus id lacus. Fusce sed risus at ex auctor commodo eget
                    eu odio
                </Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text format="h2">Tags:</Text>
                <TagsInline tags={['onshore', 'big-wave', 'sunny']} />
            </View>
        </View>
    );
};

export default SessionDetailScreen;
