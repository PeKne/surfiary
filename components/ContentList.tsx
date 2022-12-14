import React from 'react';
import { StyleSheet, FlatList, FlatListProps } from 'react-native';

import Divider from '../components/Divider';
import ListPlaceholder, { ListPlaceholderProps } from '../components/ListPlaceholder';
import { View } from '../components/themed';
import { SurfSessionFormatted, Wetsuit, SurfboardFormatted } from '../database/modelTypes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    flatContainer: {
        width: '100%',
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: 18,
        justifyContent: 'center',
        paddingTop: 5,
    },
    contentContainerEmpty: {
        flex: 1,
    },
});
type ListCompatibleModel = SurfSessionFormatted | SurfboardFormatted | Wetsuit;
type ContentListProps<T> = Pick<FlatListProps<T>, 'data' | 'renderItem'> & {
    placeholderProps: ListPlaceholderProps;
};

const ContentList = <T extends ListCompatibleModel>({ data, renderItem, placeholderProps }: ContentListProps<T>) => {
    return (
        <View style={styles.container}>
            <FlatList
                ListEmptyComponent={<ListPlaceholder {...placeholderProps} />}
                style={styles.flatContainer}
                contentContainerStyle={[styles.contentContainer, data?.length === 0 && styles.contentContainerEmpty]}
                data={data}
                renderItem={renderItem}
                ItemSeparatorComponent={Divider}
                keyExtractor={item => item.rowid!.toString()}
            />
        </View>
    );
};

export default ContentList;
