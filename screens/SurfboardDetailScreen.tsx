import React, { useEffect } from 'react';

import { Text, Icon } from '../components/themed';

import { SurfboardStackScreenProps } from '../navigation/navigationTypes';
import { DetailAttributeProps } from '../components/DetailAttribute';
import DetailScreenContent, { DetailSection } from '../components/DetailScreenContent';

const SurfboardDetailScreen = ({ navigation, route }: SurfboardStackScreenProps<'SurfboardDetail'>) => {
    const { surfboard } = route.params;
    useEffect(() => {
        navigation.setOptions({
            title: surfboard.name,
            headerRight: () =>
                Icon({ name: 'edit', onPress: () => navigation.navigate('SurfboardEdit', { surfboard }) }),
        });
    }, [navigation, surfboard]);

    const headerAttributes: DetailAttributeProps[] = [
        { iconName: 'board', title: 'Type', value: surfboard.typeFormatted }, // FIXME blocked by custom icons
        { iconName: 'arrows-alt-v', title: 'Length', value: `${surfboard.length} feet` },
        { iconName: 'box', title: 'Volume', value: `${surfboard.volume} litres` },
        { iconName: 'calendar-alt', title: 'Since', value: surfboard.dateFormatted },
    ];

    const sections: DetailSection[] = [
        {
            title: 'Description',
            content: <Text>{surfboard.description}</Text>,
        },
    ];

    return <DetailScreenContent headerAttributes={headerAttributes} sections={sections} />;
};

export default SurfboardDetailScreen;
