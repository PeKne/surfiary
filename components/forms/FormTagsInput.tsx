import React, { useState } from 'react';

import { Controller } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import TagInput from 'react-native-tags-input';
import { Text } from '../themed';
import InputContainer from './InputContainer';
import { BaseFormInputProps } from './formTypes';

const styles = StyleSheet.create({
    inputText: {
        paddingTop: 1,
        fontSize: 15,
    },
});

type FormTagsInputProps = BaseFormInputProps;

const FormTagsInput = ({ title, placeholder, defaultValue, rules = {}, ...otherProps }: FormTagsInputProps) => {
    const [tags, setTags] = useState({
        tag: '',
        tagsArray: [],
    });
    return (
        <Controller
            defaultValue={defaultValue}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <InputContainer title={title} errorMessage={error?.message}>
                    {/* <TextInput
                        style={styles.inputText}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        onChangeText={onChange}
                        value={value}
                    /> */}
                    <TagInput tags={tags} updateState={setTags} customElement={<Text>dfsdfs</Text>} />
                </InputContainer>
            )}
            {...otherProps}
        />
    );
};

export default FormTagsInput;
