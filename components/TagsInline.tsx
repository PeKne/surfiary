import React, { StyleSheet } from 'react-native';
import Tag from './Tag';
import { View } from './themed';

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginLeft: -5,
        flexDirection: 'row',
    },
});

type TagInlineProps = {
    tags: string[];
};
const TagsInline = ({ tags }: TagInlineProps) => {
    //TODO: onPress navigate to SessionList filtered
    return (
        <View style={styles.container}>
            {tags.map(label => (
                <Tag label={label} />
            ))}
        </View>
    );
};

export default TagsInline;
