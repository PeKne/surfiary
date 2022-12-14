import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View, Icon } from '../components/themed';

import { SessionStackScreenProps } from '../navigation/navigationTypes';
import { DetailAttributeProps } from '../components/DetailAttribute';
import SessionEquipment from '../components/SessionEquipment';
import TagsInline from '../components/TagsInline';
import DetailScreenContent, { DetailSection } from '../components/DetailScreenContent';

const styles = StyleSheet.create({
    equipmentWrapper: {
        paddingTop: 5,
        width: '100%',
        alignItems: 'center',
    },
});

const SessionDetailScreen = ({ navigation, route }: SessionStackScreenProps<'SessionDetail'>) => {
    const { sessionData } = route.params;
    useEffect(() => {
        navigation.setOptions({
            title: sessionData.name,
            headerRight: () =>
                Icon({ name: 'edit', onPress: () => navigation.navigate('SessionEdit', { sessionData }) }),
        });
    }, [navigation, sessionData]);

    const getEquipmentData = () => {
        const { wetsuit_id, wetsuit_name, surfboard_id, surfboard_name } = sessionData;
        return { wetsuit_id, wetsuit_name, surfboard_id, surfboard_name };
    };

    const headerAttributes: DetailAttributeProps[] = [
        { iconName: 'map-marker-alt', title: 'Location', value: sessionData.location_name },
        { iconName: 'calendar-alt', title: 'Date', value: sessionData.datetimeFormatted },
        { iconName: 'clock', title: 'Duration', value: sessionData.durationFormatted },
    ];

    const sections: DetailSection[] = [
        {
            title: 'Equipment',
            content: (
                <View style={styles.equipmentWrapper}>
                    <SessionEquipment data={getEquipmentData()} />
                </View>
            ),
        },
        {
            title: 'Notes',
            content: <Text>{sessionData.description}</Text>,
        },
    ];

    if (sessionData.tags.length > 0) {
        sections.push({
            title: 'Tags',
            content: <TagsInline tags={sessionData.tags} />,
        });
    }

    return <DetailScreenContent headerAttributes={headerAttributes} sections={sections} />;
};

export default SessionDetailScreen;
