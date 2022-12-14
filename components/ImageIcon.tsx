import React from 'react';
import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

import { View } from './themed';
import useColorScheme from '../hooks/useColorScheme';

const DEFAULT_ICON_SIZE = 35;

const styles = StyleSheet.create({
    container: {
        minWidth: DEFAULT_ICON_SIZE,
        minHeight: DEFAULT_ICON_SIZE,
        backgroundColor: 'transparent',
    },
    icon: { maxWidth: DEFAULT_ICON_SIZE, height: DEFAULT_ICON_SIZE, resizeMode: 'contain' },
});

type ImageIconProps = {
    name: 'surf' | 'wetsuit';
    size?: number;
};

const iconSourceMapLight: Record<ImageIconProps['name'], ImageSourcePropType> = {
    surf: require('../assets/icons/surfboard-light.png'),
    wetsuit: require('../assets/icons/wetsuit-light.png'),
};

const iconSourceMapDark: Record<ImageIconProps['name'], ImageSourcePropType> = {
    surf: require('../assets/icons/surfboard-dark.png'),
    wetsuit: require('../assets/icons/wetsuit-dark.png'),
};

/**
 * Renders custom PNG icon according to the selecter color theme.
 */
const ImageIcon = ({ name, size }: ImageIconProps) => {
    const colorScheme = useColorScheme();

    let imageSource;
    if (colorScheme === 'light') {
        imageSource = iconSourceMapDark[name];
    } else {
        imageSource = iconSourceMapLight[name];
    }

    const containerStyle = { ...styles.container, ...(size ? { minWidth: size, minHeight: size } : {}) };
    const iconStyle = { ...styles.icon, ...(size ? { maxWidth: size, height: size } : {}) };
    return (
        <View style={containerStyle}>
            <Image source={imageSource} fadeDuration={0} style={iconStyle} />
        </View>
    );
};

export default ImageIcon;
