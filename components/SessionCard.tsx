import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { View, Text } from './themed';
import useThemeColor from '../hooks/useThemeColor';
import SessionEquipment from './SessionEquipment';
import { SurfSessionModel } from '../database/modelTypes';
import TagsInline from './TagsInline';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 5,
        // paddingVertical: '3%',
        // borderWidth: 1,
    },
    title: {
        marginBottom: 2,
    },
    forecastWrapper: {
        marginTop: 5,
        paddingVertical: 2,
        opacity: 0.5,
    },
});

type SessionCardProps = {
    sessionData: SurfSessionModel;
    openDetail(): void;
};
const SessionCard = ({ sessionData, openDetail }: SessionCardProps) => {
    const mutedColor = useThemeColor('muted');
    const containerStyle = { ...styles.container, borderColor: mutedColor };
    const metaTextStyle = { color: mutedColor };
    const forecastWrapperStyle = { ...styles.forecastWrapper };

    return (
        <TouchableOpacity style={containerStyle} onPress={openDetail}>
            <Text format="h1" style={styles.title}>
                Evening Surf Session
            </Text>
            <Text style={metaTextStyle}>Monday, Jun 2nd 2O22, 12:30 - 14:30</Text>
            <Text style={metaTextStyle}>Echo Beach, Canggu (Reef break)</Text>
            <SessionEquipment />
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus a diam in tempus. Aliquam
                sagittis ligula at elit congue rhoncus. Integer feugiat, lorem sed rhoncus auctor, nibh eros condimentum
                nibh, quis scelerisque turpis metus id lacus. Fusce sed risus at ex auctor commodo eget eu odio
            </Text>
            <TagsInline tags={['onshore', 'big-wave', 'sunny']} />
            <View style={forecastWrapperStyle}>
                <Text>
                    <Text style={{ fontWeight: '600' }}>Conditions:</Text> hightide, offshore wind{' '}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default SessionCard;
