import React from 'react';

import { Controller } from 'react-hook-form';
import { AutocompleteTags } from '../themed';
import InputContainer from './InputContainer';
import { BaseFormInputProps } from './formTypes';
import Tag from '../Tag';
import AutocompleteSuggestion from '../AutocompleteSuggestion';

type FormTagsInputProps = BaseFormInputProps & {
    suggestedTags?: string[];
};

const FormTagsInput = ({
    title,
    placeholder,
    defaultValue = [],
    suggestedTags = [],
    ...otherProps
}: FormTagsInputProps) => {
    return (
        <Controller
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <InputContainer title={title} errorMessage={error?.message}>
                    <AutocompleteTags
                        renderTag={(tag, onPress) => <Tag key={tag} text={tag} onPress={onPress} />}
                        renderSuggestion={(suggenstion, onPress) => (
                            <AutocompleteSuggestion text={suggenstion} onPress={onPress} />
                        )}
                        tags={value}
                        suggestions={suggestedTags}
                        onChangeTags={(newTags: string[]) => {
                            console.log(newTags);
                            let lastAdded = newTags.pop();
                            if (lastAdded === undefined) {
                                // empty array
                                onChange(newTags);
                                return;
                            }
                            lastAdded = lastAdded.trim().toLowerCase();
                            if (lastAdded.length > 0 && !newTags.includes(lastAdded)) {
                                // non-empty tag and doesn't already exists in array
                                newTags.push(lastAdded);
                            }
                            onChange(newTags);
                        }}
                        labelExtractor={(tag: string) => tag}
                        inputProps={{ placeholder }}
                    />
                </InputContainer>
            )}
            defaultValue={defaultValue}
            {...otherProps}
        />
    );
};

export default FormTagsInput;
