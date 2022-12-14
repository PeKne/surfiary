import React, { useEffect } from 'react';

import { Text, Icon } from '../components/themed';

import { SurfboardStackScreenProps, WetsuitStackScreenProps } from '../navigation/navigationTypes';
import { DetailAttributeProps } from '../components/DetailAttribute';
import DetailScreenContent, { DetailSection } from '../components/DetailScreenContent';

const WetsuitDetailScreen = ({ navigation, route }: WetsuitStackScreenProps<'WetsuitDetail'>) => {
    const { wetsuit } = route.params;
    useEffect(() => {
        navigation.setOptions({
            title: wetsuit.name,
            headerRight: () => Icon({ name: 'edit', onPress: () => navigation.navigate('WetsuitDetail', { wetsuit }) }),
        });
    }, [navigation, wetsuit]);

    const headerAttributes: DetailAttributeProps[] = [
        { iconName: 'wetsuit', title: 'Type', value: wetsuit.typeFormatted }, // FIXME blocked by custom icons
        { iconName: 'certificate', title: 'Brand', value: wetsuit.brand ?? "unknown" }, // FIXME on NULL hide
        { iconName: 'compress-alt', title: 'Thick', value: `${wetsuit.thickness} milimeters` },
        { iconName: 'calendar-alt', title: 'Since', value: wetsuit.dateFormatted },
    ]; //

    const sections: DetailSection[] = [
        {
            title: 'Description',
            content: <Text>{wetsuit.description}</Text>,
        },
    ];

    return <DetailScreenContent headerAttributes={headerAttributes} sections={sections} />;
};

export default WetsuitDetailScreen;
