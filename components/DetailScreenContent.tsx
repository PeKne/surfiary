import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/themed';

import DetailAttribute, { DetailAttributeProps } from '../components/DetailAttribute';
import Divider from '../components/Divider';

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
    },
    equipmentWrapper: {
        paddingTop: 5,
        width: '100%',
        alignItems: 'center',
    },
});

export type DetailSection = {
    title: string;
    content: JSX.Element;
};

type DetailScreenContentProps = {
    headerAttributes: DetailAttributeProps[];
    sections: DetailSection[];
};

const DetailScreenContent = ({ headerAttributes, sections }: DetailScreenContentProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {headerAttributes.map(props => (
                    <DetailAttribute {...props} />
                ))}
            </View>
            <Divider />

            {sections.map(section => (
                <View style={styles.sectionContainer}>
                    <Text format="h2">{section.title}:</Text>
                    {section.content}
                </View>
            ))}
        </View>
    );
};

export default DetailScreenContent;
