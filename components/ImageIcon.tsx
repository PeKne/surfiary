import React from 'react';
import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

import { View } from './themed';
import useColorScheme from '../hooks/useColorScheme';
import { ImageIconProps } from './componentsTypes';

const ICON_SIZE = 35;

const styles = StyleSheet.create({
    container: {
        minWidth: ICON_SIZE,
        minHeight: ICON_SIZE,
    },
    icon: { maxWidth: ICON_SIZE, height: ICON_SIZE, resizeMode: 'contain' },
});

const iconSourceMapLight: Record<string, ImageSourcePropType> = {
    surf: require('../assets/icons/surfboard-light.png'),
    wetsuit: require('../assets/icons/wetsuit-light.png'),
};

const iconSourceMapDark: Record<string, ImageSourcePropType> = {
    surf: require('../assets/icons/surfboard-dark.png'),
    wetsuit: require('../assets/icons/wetsuit-dark.png'),
};

/**
 * Renders custom PNG icon according to the selecter color theme.
 */
const ImageIcon = ({ icon }: ImageIconProps) => {
    const colorScheme = useColorScheme();

    let imageSource;
    if (colorScheme === 'light') {
        imageSource = iconSourceMapDark[icon];
    } else {
        imageSource = iconSourceMapLight[icon];
    }
    return (
        <View style={styles.container}>
            <Image source={imageSource} fadeDuration={0} style={styles.icon} />
        </View>
    );
};

export default ImageIcon;
