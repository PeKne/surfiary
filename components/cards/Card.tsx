import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '../themed';
import useThemeColor from '../../hooks/useThemeColor';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 5,
    },
    title: {
        marginBottom: 2,
    },
});

type CardProps = {
    title: React.ReactNode;
    subtitles: string[];
    children: React.ReactNode;
    onPress(): void;
};
const Card = ({ title, subtitles, onPress, children }: CardProps) => {
    const mutedColor = useThemeColor('muted');
    const containerStyle = { ...styles.container, borderColor: mutedColor };
    const metaTextStyle = { color: mutedColor };

    return (
        <TouchableOpacity style={containerStyle} onPress={onPress}>
            <Text format="h1" style={styles.title}>
                {title}
            </Text>
            {subtitles.map(subtitle => (
                <Text style={metaTextStyle}>{subtitle}</Text>
            ))}
            {children}
        </TouchableOpacity>
    );
};

export default Card;
