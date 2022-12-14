import React from 'react';
import { Text } from '../themed';
import SessionEquipment from '../SessionEquipment';
import { SurfSessionFormatted } from '../../database/modelTypes';
import TagsInline from '../TagsInline';
import Card from './Card';

type SessionCardProps = {
    sessionData: SurfSessionFormatted;
    onPress(): void;
};
const SessionCard = ({ sessionData, onPress }: SessionCardProps) => {
    const getEquipmentData = () => {
        const { wetsuit_id, wetsuit_name, surfboard_id, surfboard_name } = sessionData;
        return { wetsuit_id, wetsuit_name, surfboard_id, surfboard_name };
    };

    return (
        <Card
            title={sessionData.name}
            subtitles={[sessionData.datetimeFormatted, sessionData.location_name]}
            onPress={onPress}
        >
            <SessionEquipment data={getEquipmentData()} />
            <Text>{sessionData.description}</Text>
            <TagsInline tags={sessionData.tags} />
        </Card>
    );
};

export default SessionCard;
