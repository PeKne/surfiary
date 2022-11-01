import React, { StyleSheet } from 'react-native';
import DefaultAutocompleteTags, { AutocompleteTagsProps } from 'react-native-autocomplete-tags';
import FontSizes from '../../constants/FontSizes';
import useThemeColor from '../../hooks/useThemeColor';

const styles = StyleSheet.create({
    input: {
        fontSize: FontSizes.body,
    },
});

const AutocompleteTags = ({ inputStyle, inputProps, ...otherProps }: AutocompleteTagsProps) => {
    const color = useThemeColor('text');
    const backgroundColor = useThemeColor('background');
    const mutedColor = useThemeColor('muted');

    return (
        <DefaultAutocompleteTags
            inputStyle={{ color, ...styles.input, ...inputStyle }}
            containerStyle={{ backgroundColor }}
            inputProps={{ placeholderTextColor: mutedColor, ...inputProps }}
            parseChars={[',', ' ', ';', '\n', '[', ']']}
            {...otherProps}
        />
    );
};

export default AutocompleteTags;
