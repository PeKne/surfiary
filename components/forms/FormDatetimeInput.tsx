import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { Text, Icon } from '../themed';
import InputContainer from './InputContainer';
import { BaseFormInputProps } from './formTypes';
import { datetimeToUnix, formatTimestampShort } from '../../utils';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
    },
});

type FormDatetimeInputProps = BaseFormInputProps & {
    defaultValue?: number;
};

const FormDatetimeInput = ({ title, ...otherProps }: FormDatetimeInputProps) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    return (
        <Controller
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <InputContainer title={title} errorMessage={error?.message}>
                    <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.container}>
                        <Text>{formatTimestampShort(value)}</Text>
                        <Icon name="calendar" size={20} />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="datetime"
                            onConfirm={dt => {
                                onChange(datetimeToUnix(dt));
                                setDatePickerVisibility(false);
                            }}
                            onCancel={() => setDatePickerVisibility(false)}
                        />
                    </TouchableOpacity>
                </InputContainer>
            )}
            {...otherProps}
        />
    );
};

export default FormDatetimeInput;
