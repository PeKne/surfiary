import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import SurfboardCard from '../components/cards/SurfboardCard';
import ContentList from '../components/ContentList';

import { Surfboard, SurfboardFormatted, SurfboardType } from '../database/modelTypes';
import useReadDatabaseTable from '../database/useReadDatabaseTable';
import { SurfboardStackScreenProps } from '../navigation/navigationTypes';
import { formatTimestamp } from '../utils';

const formatSurfboardType = (type_code: SurfboardType) => {
    switch (type_code) {
        case 'SHORT':
            return 'Shortboard';
        case 'FISH':
            return 'Fish';
        case 'LONG':
            return 'Longboard';
        case 'SOFT':
            return 'Softboard';
        default:
            return 'Unknown';
    }
};

const surfboardFormatter = (board: Surfboard): SurfboardFormatted => {
    return {
        ...board,
        dateFormatted: formatTimestamp(board.date, 'date'),
        typeFormatted: formatSurfboardType(board.type),
    };
};

const SurfboardListScreen = ({ navigation }: SurfboardStackScreenProps<'SurfboardList'>) => {
    const boards = useReadDatabaseTable('surfboard', surfboardFormatter);

    const renderItem = ({ item }: ListRenderItemInfo<SurfboardFormatted>) => (
        <SurfboardCard data={item} onPress={() => navigation.push('SurfboardDetail', { surfboard: item })} />
    );
    return (
        <ContentList
            data={boards}
            renderItem={renderItem}
            placeholderProps={{
                message: 'No surfboard listed yet.',
                buttonTitle: 'Save the first one!',
                buttonOnPress: () => navigation.navigate('SurfboardEdit'),
            }}
        />
    );
};

export default SurfboardListScreen;
