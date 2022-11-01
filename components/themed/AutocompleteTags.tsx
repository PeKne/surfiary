import React from 'react-native';
import DefaultAutocompleteTags, { AutocompleteTagsProps } from 'react-native-autocomplete-tags';
import useThemeColor from '../../hooks/useThemeColor';

const AutocompleteTags = ({ inputStyle, inputProps, ...otherProps }: AutocompleteTagsProps) => {
    const color = useThemeColor('text');
    const backgroundColor = useThemeColor('background');
    const mutedColor = useThemeColor('muted');

    return (
        <DefaultAutocompleteTags
            inputStyle={{ color, fontSize: 15, ...inputStyle }}
            containerStyle={{ backgroundColor, marginHorizontal: 0, paddingHorizontal: 0 }}
            inputProps={{ placeholderTextColor: mutedColor, ...inputProps }}
            parseChars={[',', ' ', ';', '\n', '[', ']']}
            {...otherProps}
        />
    );
};

export default AutocompleteTags;
