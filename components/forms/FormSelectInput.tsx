import React from 'react';

import { Controller } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import InputContainer from './InputContainer';
import { BaseFormInputProps } from './formTypes';
import { Icon, SelectDropdown } from '../themed';

const styles = StyleSheet.create({
    button: {
        width: '100%',
        marginHorizontal: 0,
        paddingHorizontal: 0,
        height: 'auto',
        justifyContent: 'space-between',
    },
    row: {
        height: 35,
        borderBottomWidth: 0.2,
    },
    buttonText: {
        fontSize: 15,
        textAlign: 'left',
        paddingHorizontal: 0,
        marginHorizontal: 0,
    },
    rowText: {
        fontSize: 15,
        textAlign: 'left',
        paddingHorizontal: 0,
    },
    searchInput: {
        height: 35,
    },
});

type FormSelectInputProps = BaseFormInputProps & { options: Record<string, number>; searchPlaceholder: string };
const FormSelectInput = ({
    name,
    title,
    defaultValue,
    options,
    placeholder,
    searchPlaceholder,
    ...otherProps
}: FormSelectInputProps) => {
    const defaultValueText = Object.keys(options).find(key => options[key] === defaultValue); // find key by value in options
    return (
        <Controller
            defaultValue={defaultValue}
            name={name}
            render={({ field: { onChange }, fieldState: { error } }) => (
                <InputContainer title={title} errorMessage={error?.message}>
                    <SelectDropdown
                        data={Object.keys(options)}
                        defaultValue={defaultValueText}
                        defaultButtonText={placeholder}
                        onSelect={selectedItem => onChange(options[selectedItem])}
                        buttonTextAfterSelection={item => item}
                        rowTextForSelection={item => item}
                        search
                        searchPlaceHolder={searchPlaceholder}
                        buttonStyle={styles.button}
                        buttonTextStyle={styles.buttonText}
                        rowTextStyle={styles.rowText}
                        rowStyle={styles.row}
                        renderDropdownIcon={isOpened => <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} />}
                        renderSearchInputLeftIcon={() => <Icon name="search" size={15} />}
                        renderSearchInputRightIcon={() => <Icon name="plus-square" size={18} />}
                    />
                </InputContainer>
            )}
            {...otherProps}
        />
    );
};

export default FormSelectInput;
