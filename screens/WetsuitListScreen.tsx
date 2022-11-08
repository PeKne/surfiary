import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { Text, View } from '../components/themed';
import { WetsuitStackScreenProps } from '../navigation/navigationTypes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

// TODO: fix Stack screen props everywhere!!!
const WetsuitListScreen = ({ navigation }: WetsuitStackScreenProps<'WetsuitList'>) => {
    return (
        <View style={styles.container}>
            <Text>Wetsuit Tab</Text>
            <View style={styles.separator} />
            <Pressable onPress={() => navigation.navigate('WetsuitDetail')}>
                <Text> go to Detail screen</Text>
            </Pressable>
        </View>
    );
};

export default WetsuitListScreen;
