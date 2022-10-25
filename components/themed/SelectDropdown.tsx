import React, { StyleSheet, Text } from 'react-native';
import DefaultSelectDropdown, { SelectDropdownProps } from 'react-native-select-dropdown';

import useThemeColor from '../../hooks/useThemeColor';

const SelectDropdown = ({
    buttonStyle,
    dropdownStyle,
    buttonTextStyle,
    rowTextStyle,
    searchInputStyle,
    defaultButtonText,
    ...otherProps
}: SelectDropdownProps) => {
    const color = useThemeColor('text');
    const backgroundColor = useThemeColor('background');
    const mutedColor = useThemeColor('muted');

    // Due to bug in 'react-native-select-dropdown' library,
    // single style object has to be created for correct style render
    const themedButtonStyle = StyleSheet.flatten([buttonStyle, { backgroundColor }]);
    const themedButtonTextStyle = StyleSheet.flatten([buttonTextStyle, { color }]);
    const themedDropdownStyle = StyleSheet.flatten([
        dropdownStyle,
        { backgroundColor, borderWidth: 0.2, borderColor: color },
    ]);
    const themedRowTextStyle = StyleSheet.flatten([rowTextStyle, { color }]);
    const themedSearchInputStyle = StyleSheet.flatten([searchInputStyle, { backgroundColor }]);

    const textPlaceholder = <Text style={{ color: mutedColor }}>{defaultButtonText}</Text>;
    return (
        <DefaultSelectDropdown
            defaultButtonText={textPlaceholder as unknown as string} // workaround of poorly designed placeholder prop of react-native-select-dropdown
            buttonStyle={themedButtonStyle}
            buttonTextStyle={themedButtonTextStyle}
            dropdownStyle={themedDropdownStyle}
            rowTextStyle={themedRowTextStyle}
            searchInputStyle={themedSearchInputStyle}
            searchInputTxtColor={color}
            {...otherProps}
        />
    );
};

export default SelectDropdown;
