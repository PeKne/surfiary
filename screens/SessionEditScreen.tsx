import React, { useEffect } from 'react';
import { Button, StyleSheet } from 'react-native';

import { useForm } from 'react-hook-form';
import { Text, View } from '../components/themed';

import { SessionStackScreenProps } from '../navigation/navigationTypes';
import DeleteIcon from '../components/DeleteIcon';
import FormTextInput from '../components/forms/FormTextInput';
import FormSelectInput from '../components/forms/FormSelectInput';
import FormDatetimeInput from '../components/forms/FormDatetimeInput';
import { datetimeToUnix } from '../utils';
import Divider from '../components/Divider';
import FormTagsInput from '../components/forms/FormTagsInput';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
});

const SessionEditScreen = ({ navigation }: SessionStackScreenProps<'SessionEdit'>) => {
    const { control, handleSubmit } = useForm();
    useEffect(() => {
        navigation.setOptions({
            title: 'New Session',
            headerRight: () => DeleteIcon({ onDelete: () => navigation.navigate('SessionList') }),
            // TODO: create real delete function
        });
    }, [navigation]);

    const getDefaultTitleValue = () => {
        return 'Evening Session'; // TODO: generate title based on time of day
    };
    return (
        <View style={styles.container}>
            <Text format="h2">Details:</Text>
            <FormTextInput
                fieldType="text"
                name="input1"
                title="Title"
                placeholder="How you name it?"
                defaultValue={getDefaultTitleValue}
                control={control}
                rules={{ required: 'Title is required.' }}
            />
            <FormDatetimeInput
                defaultValue={datetimeToUnix(new Date())}
                name="input2"
                title="Date"
                control={control}
                placeholder="Where was it?"
                rules={{ required: 'Location is required.' }}
            />
            <FormSelectInput
                name="input3"
                title="Location"
                control={control}
                options={{ Canggu: 1, Pipeline: 2, Extreme: 3, Uluwatu: 4 }}
                placeholder="Where was it?"
                searchPlaceholder="search spots..."
                rules={{ required: 'Choose a surf spot.' }}
            />
            <FormTextInput
                fieldType="number"
                name="input4"
                title="Duration"
                placeholder="How long? (minutes)"
                control={control}
            />
            <FormTextInput
                fieldType="textarea"
                name="input5"
                title="Notes"
                control={control}
                placeholder="Anything on your mind?"
            />
            <FormTagsInput name="input5" title="Tags" control={control} placeholder="Anything on your mind?" />
            <Divider />
            <Text format="h2">Equipment:</Text>
            <FormSelectInput
                name="input6"
                title="Board"
                control={control}
                options={{ Board: 1, Long: 2, Fish: 3, Boss: 4 }}
                placeholder="Which board?"
                searchPlaceholder="search spots..."
                rules={{ required: 'Select one of your boards.' }}
            />
            <FormSelectInput
                name="input7"
                title="Wetsuit"
                control={control}
                options={{ "O'neil": 1, Ripcurl: 2, 'Da Vinci': 3, Michelangelo: 4 }}
                placeholder="Which wetsuit?"
                searchPlaceholder="search spots..."
            />
            <Divider />
            <Text format="h2">Conditions:</Text>

            {/* TODO: Tags */}
            {/* TODO: Location Widget */}

            {/* TODO: Equipment */}
            {/* TODO: Weather integration */}

            <Button
                title="SAVE"
                onPress={handleSubmit(
                    data => console.log('CORRECT', data),
                    errors => console.log('FAIL', errors),
                )}
            />
        </View>
    );
};

export default SessionEditScreen;
