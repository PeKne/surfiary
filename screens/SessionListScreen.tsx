import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import ContentList from '../components/ContentList';

import SessionCard from '../components/SessionCard';
import { FormattedSurfSession } from '../database/modelTypes';
import useGetSurfSessions from '../database/useGetSurfSessions';
import { SessionStackScreenProps } from '../navigation/navigationTypes';

const SessionListScreen = ({ navigation }: SessionStackScreenProps<'SessionList'>) => {
    // TODO: implement filter logic
    const sessions = useGetSurfSessions();

    const renderItem = ({ item }: ListRenderItemInfo<FormattedSurfSession>) => (
        <SessionCard
            sessionData={item}
            openDetail={(sessionData: FormattedSurfSession) => navigation.push('SessionDetail', { sessionData })}
        />
    );
    return (
        <ContentList
            data={sessions}
            renderItem={renderItem}
            placeholderProps={{
                message: 'No session exists yet.',
                buttonTitle: 'Create a first one.',
                buttonOnPress: () => navigation.navigate('SessionEdit'),
            }}
        />
    );
};

export default SessionListScreen;
