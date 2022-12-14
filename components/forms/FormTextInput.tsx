import React from 'react';

import { Controller } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { TextInput } from '../themed';
import InputContainer from './InputContainer';
import { BaseFormInputProps } from './formTypes';
import { FontSizes } from '../../constants';

const styles = StyleSheet.create({
    inputText: {
        paddingTop: 1,
        fontSize: FontSizes.body,
    },
});

type FormTextInputProps = BaseFormInputProps & {
    fieldType: 'text' | 'textarea' | 'number';
    defaultValue?: string | number;
};

const FormTextInput = ({
    title,
    placeholder,
    defaultValue,
    fieldType,
    rules = {},
    ...otherProps
}: FormTextInputProps) => {
    const isNumber = fieldType === 'number';
    /**
     * Helper function for react-hook-form validation configuration.
     */
    const getValidatonRules = () => {
        const dynamicRules = rules;
        if (isNumber) {
            dynamicRules!.pattern = { value: /^[0-9]*$/g, message: 'Input a valid number.' };
        }
        return dynamicRules;
    };

    return (
        <Controller
            defaultValue={defaultValue}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <InputContainer title={title} errorMessage={error?.message}>
                    <TextInput
                        keyboardType={isNumber ? 'number-pad' : 'default'}
                        multiline={fieldType === 'textarea'}
                        style={styles.inputText}
                        placeholder={placeholder}
                        defaultValue={defaultValue?.toString()}
                        onChangeText={onChange}
                        value={value}
                    />
                </InputContainer>
            )}
            rules={getValidatonRules()}
            {...otherProps}
        />
    );
};

export default FormTextInput;
