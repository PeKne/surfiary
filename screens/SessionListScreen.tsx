import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import ContentList from '../components/ContentList';

import SessionCard from '../components/cards/SessionCard';
import { SurfSessionFormatted, SurfSessionRaw } from '../database/modelTypes';
import useReadDatabaseTable from '../database/useReadDatabaseTable';
import { SessionStackScreenProps } from '../navigation/navigationTypes';
import { formatDuration, formatTimestamp } from '../utils';

const SessionListScreen = ({ navigation }: SessionStackScreenProps<'SessionList'>) => {
    // TODO: implement filter logic

    const formatSurfSessions = (instance: SurfSessionRaw): SurfSessionFormatted => {
        return {
            ...instance,
            datetimeFormatted: formatTimestamp(instance.date),
            durationFormatted: formatDuration(instance.duration),
            tags: instance.tags ? instance.tags.split(',') : [],
        };
    };

    const sessions = useReadDatabaseTable('surf_session', formatSurfSessions);

    const renderItem = ({ item }: ListRenderItemInfo<SurfSessionFormatted>) => (
        <SessionCard sessionData={item} onPress={() => navigation.push('SessionDetail', { sessionData: item })} />
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
