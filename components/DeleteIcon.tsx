import React from 'react';
import { Alert } from 'react-native';
import { Icon } from './themed';

const DeleteIcon = ({ onDelete }: { onDelete(): void }) => {
    const confirmDelete = () => {
        return Alert.alert('Delete this record?', 'Record XY will be deleted permanently...', [
            {
                text: 'Cancel',
                onPress: () => null, // TODO: implement real delete behaviour
                style: 'cancel',
            },
            { text: 'OK', onPress: onDelete },
        ]);
    };

    return <Icon name="trash" onPress={confirmDelete} />;
};

export default DeleteIcon;
