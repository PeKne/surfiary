import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import WetsuitCard from '../components/cards/WetsuitCard';
import ContentList from '../components/ContentList';

import { Wetsuit, WetsuitFormatted, WetsuitType } from '../database/modelTypes';
import useReadDatabaseTable from '../database/useReadDatabaseTable';
import { WetsuitStackScreenProps } from '../navigation/navigationTypes';
import { formatTimestamp } from '../utils';

const formatWetsuitType = (type_code: WetsuitType) => {
    switch (type_code) {
        case 'SHORT':
            return 'Shortsleeve';
        case 'LONG':
            return 'Longsleeve';
        case 'RASH':
            return 'Rashguard';
        default:
            return 'Unknown';
    }
};

const wetsuitFormatter = (wetsuit: Wetsuit): WetsuitFormatted => {
    return {
        ...wetsuit,
        dateFormatted: formatTimestamp(wetsuit.date, 'date'),
        typeFormatted: formatWetsuitType(wetsuit.type),
    };
};

const WetsuitListScreen = ({ navigation }: WetsuitStackScreenProps<'WetsuitList'>) => {
    const wetsuits = useReadDatabaseTable('wetsuit', wetsuitFormatter);

    const renderItem = ({ item }: ListRenderItemInfo<WetsuitFormatted>) => (
        <WetsuitCard data={item} onPress={() => navigation.push('WetsuitDetail', { wetsuit: item })} />
    );
    return (
        <ContentList
            data={wetsuits}
            renderItem={renderItem}
            placeholderProps={{
                message: 'No surfboard listed yeat.',
                buttonTitle: 'Save the first one!',
                buttonOnPress: () => navigation.navigate('WetsuitEdit'),
            }}
        />
    );
};

export default WetsuitListScreen;
