import React, { useEffect } from 'react';
import { Button, StyleSheet } from 'react-native';

import { useForm } from 'react-hook-form';
import { Text, ScrollView, Icon } from '../components/themed';

import { SessionStackScreenProps } from '../navigation/navigationTypes';
import FormTextInput from '../components/forms/FormTextInput';
import FormSelectInput from '../components/forms/FormSelectInput';
import FormDatetimeInput from '../components/forms/FormDatetimeInput';
import { datetimeToUnix } from '../utils';
import Divider from '../components/Divider';
import FormTagsInput from '../components/forms/FormTagsInput';
import useGetSurfboards from '../database/useGetSurfboards';
import { Surfboard, Wetsuit, Location } from '../database/modelTypes';
import useGetWetsuits from '../database/useGetWetsuits';
import useGetLocations from '../database/useGetLocations';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
});

const SessionEditScreen = ({ navigation, route }: SessionStackScreenProps<'SessionEdit'>) => {
    const sessionData = route.params?.sessionData;
    const surfboards = useGetSurfboards();
    const wetsuits = useGetWetsuits();
    const locations = useGetLocations();
    const { control, handleSubmit } = useForm();
    useEffect(() => {
        navigation.setOptions({
            title: 'New Session',
            headerRight: () => Icon({ name: 'trash-alt', onPress: () => null }), // TODO: implement real deletion
        });
    }, [navigation]);

    /**
     * Generates generic session title based on time of the day.
     */
    const getDefaultTitleValue = () => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            return 'Morning Session';
        }
        if (currentHour < 17) {
            return 'Afternoon Session';
        }
        return 'Evening Session';
    };

    const formatSelectValues = (optionObjects: Surfboard[] | Wetsuit[] | Location[]) => {
        const options: Record<string, number> = {};
        optionObjects.forEach(board => {
            options[board.name] = board.rowid!;
        });
        return options;
    };
    return (
        <ScrollView style={styles.container} nestedScrollEnabled={false}>
            <Text format="h2">Details:</Text>
            <FormTextInput
                fieldType="text"
                name="name"
                defaultValue={sessionData?.name ?? getDefaultTitleValue()}
                title="Title"
                placeholder="How you name it?"
                control={control}
                rules={{ required: 'Title is required.' }}
            />
            <FormDatetimeInput
                name="date"
                defaultValue={sessionData?.date ?? datetimeToUnix(new Date())}
                title="Date"
                control={control}
                placeholder="Where was it?"
                rules={{ required: 'Location is required.' }}
            />
            <FormSelectInput
                name="location"
                defaultValue={sessionData?.location_id}
                title="Location"
                control={control}
                options={formatSelectValues(locations)}
                placeholder="Where was it?"
                searchPlaceholder="search spots..."
                rules={{ required: 'Choose a surf spot.' }}
            />
            <FormTextInput
                fieldType="number"
                name="duration"
                defaultValue={sessionData?.duration}
                title="Duration"
                placeholder="How long? (minutes)"
                control={control}
            />
            <FormTextInput
                fieldType="textarea"
                name="description"
                defaultValue={sessionData?.description}
                title="Notes"
                control={control}
                placeholder="Anything on your mind?"
            />
            <FormTagsInput
                name="tags"
                title="Tags"
                defaultValue={sessionData?.tags ?? []}
                control={control}
                suggestedTags={['offshore', 'onshore', 'owindy', 'osuperb', 'oclosing out']}
                placeholder="Type..."
            />
            <Divider />
            <Text format="h2">Equipment:</Text>
            <FormSelectInput
                name="board"
                defaultValue={sessionData?.surfboard_id}
                title="Board"
                control={control}
                options={formatSelectValues(surfboards)}
                placeholder="Which board?"
                searchPlaceholder="search spots..."
                rules={{ required: 'Select one of your boards.' }}
            />
            <FormSelectInput
                name="wetsuit"
                defaultValue={sessionData?.wetsuit_id}
                title="Wetsuit"
                control={control}
                options={formatSelectValues(wetsuits)}
                placeholder="Which wetsuit?"
                searchPlaceholder="search spots..."
            />
            <Button
                title="SAVE"
                onPress={handleSubmit(
                    data => console.log('CORRECT', data),
                    errors => console.log('FAIL', errors),
                )}
            />
        </ScrollView>
    );
};

export default SessionEditScreen;
