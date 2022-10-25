const tintColorLight = '#000';
const tintColorDark = '#fff';

export const mutedColorHex = '#919191';

export default {
    mutedColor: mutedColorHex,
    light: {
        text: '#000',
        background: '#fff',
        muted: mutedColorHex,
        tint: tintColorLight,
        tabIconDefault: mutedColorHex,
        tabIconSelected: tintColorLight,
    },
    dark: {
        text: '#fff',
        background: '#000',
        muted: mutedColorHex,
        tint: tintColorDark,
        tabIconDefault: mutedColorHex,
        tabIconSelected: tintColorDark,
    },
};
